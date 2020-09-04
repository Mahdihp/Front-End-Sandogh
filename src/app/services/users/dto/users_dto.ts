export class LoginForm{
  username: string;
  password: string;


  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}

export interface UserResponse {
  status: number;
  message: string;
  data?: UserInfo[] | null;
}

export interface UserInfo {
  nationalId: string;
  username: string;
  displayName: string;
  login: boolean;
  active: boolean;
  createTime: string;
  updateTime: string;
  jwtResponse: JwtResponse;
  roles: string;
  permissions?: Permission[] | null;
}

export interface Permission {
  id: number;
  displayName: string;
}

export interface JwtResponse {
  token: string;
  type: string;
}
