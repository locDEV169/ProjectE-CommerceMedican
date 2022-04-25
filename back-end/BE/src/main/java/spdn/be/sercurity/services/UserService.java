package spdn.be.sercurity.services;


import spdn.be.dto.UserDto;
import spdn.be.payload.response.UserInfoResponse;

public interface UserService {
    UserDto updateUser (UserDto user , Long id);
}
