package spdn.be.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import spdn.be.dto.ProductDto;
import spdn.be.dto.UserDto;
import spdn.be.entity.User;
import spdn.be.exception.ErrorMessages;
import spdn.be.exception.RequestException;
import spdn.be.payload.response.UserInfoResponse;
import spdn.be.repository.UserRepository;
import spdn.be.sercurity.services.UserService;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserService userService;
    @GetMapping("/list-user")
    public ResponseEntity<List<User>> getAllUser() {
        List<User> users = new ArrayList<>();
        users = userRepository.findAll();
        if (users.isEmpty()) {
            return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getUserById(@PathVariable Long id) {
        Optional<User> user = userRepository.findById(id);


        return new ResponseEntity<Object>(user,HttpStatus.OK);
    }
    @DeleteMapping("delete/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id ){
        userRepository.deleteById(id);
        return  new ResponseEntity<>(HttpStatus.OK);
    }
    @PutMapping("update/{id}")
    public ResponseEntity<?> updateUser(@RequestBody UserDto body , @PathVariable Long id){
        try {
            UserDto user = userService.updateUser(body, id);
            return ResponseEntity.status(HttpStatus.OK).body(user);

        } catch (Exception e) {
            e.printStackTrace();
            throw new RequestException((ErrorMessages.MISSING_REQUIRED_FIELD.getErrorMessages()));
        }
    }

}
