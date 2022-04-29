package spdn.be.sercurity.services;


import spdn.be.dto.UserDto;
import spdn.be.entity.User;

public interface UserService {
    UserDto updateUser(UserDto body, Long id);

    void changeUserPassword(Long  id, String newpassword,String oldpassword);
    void changeUserPassword1(String   name, String newpassword,String oldpassword);




}
