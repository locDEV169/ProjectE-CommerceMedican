package spdn.be.sercurity.services.impl;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import spdn.be.dto.UserDto;
import spdn.be.entity.User;
import spdn.be.repository.RoleRepository;
import spdn.be.repository.UserRepository;
import spdn.be.sercurity.services.UserService;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    PasswordEncoder encoder;
    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDto updateUser(UserDto body, Long id) {
        User user = new User();
        BeanUtils.copyProperties(body, user);
        User userUpdate = userRepository.findById(id).get();
        userUpdate.setAddress(user.getAddress());
        userUpdate.setEmail(user.getEmail());
        userUpdate.setFullName(user.getFullName());
        if (user.getPassword() == null) {

            userUpdate.setPassword(encoder.encode(userUpdate.getPassword()));

        } else {
            userUpdate.setPassword(encoder.encode(user.getPassword()));
        }

        userUpdate.setRoles(userUpdate.getRoles());

        userUpdate.setPhoneNumber(user.getPhoneNumber());

        userRepository.save(userUpdate);
        UserDto returnValue = new UserDto();
        BeanUtils.copyProperties(userUpdate, returnValue);
        return returnValue;
    }


    public void changeUserPassword1(String   name, String newpassword,String oldpassword) {
        User user  = userRepository.findByUsername(name)
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + name));

        if(encoder.matches(oldpassword,user.getPassword())){
            user.setPassword(encoder.encode(newpassword));
        }


        userRepository.save(user);
    }


}
