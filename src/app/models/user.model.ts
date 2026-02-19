export interface User {
  id: string | number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'ADMIN' | 'MEDICO' | 'LABORATORIO' | 'PACIENTE';
  token?: string;
  isActive: boolean;
  lastLogin?: Date;
}

export interface AuthResponse {
  user: User;
  token: string;
  expiresIn: number;
}