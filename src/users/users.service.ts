/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'John Doe', email: "john@does.com", role: "ADMIN" },
    { id: 2, name: 'Jane Doe', email: "jane@doe.com", role: "ENGINEER" },
    { id: 3, name: 'Jim Doe', email: "jim@doe.com", role: "INTERN" },
    { id: 4, name: 'Jill Doe', email: "jil@doe.com", role: "ADMIN" },
    { id: 5, name: 'Jack Doe', email: "jack@doe.com", role: "ENGINEER"}

  ];
  findAll(role?:'INTERN' | 'ENGINEER' | 'ADMIN') {
    if(role){
      return this.users.filter(user => user.role === role);
    }
    return this.users;
  }
  findOne(id: number) {
    return this.users.find(user => user.id === id);
  }
  create(user: { name: string, email: string, role: "INTERN" | "ENGINEER" | "ADMIN"; }) {
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = { id: usersByHighestId[0].id + 1, ...user };
    this.users.push(newUser)
    return newUser;
  }
  update(id: number, updatedUser: { name?: string, email?: string, role?: "INTERN" | "ENGINEER" | "ADMIN"; }) {
    this.users = this.users.map(user => {
      if (user.id === id) {
        return { ...user, ...updatedUser };
      }
      return user;
    }
    );
    return this.users.find(user => user.id === id);
  }
  delete(id:number){
    const removedUser = this.findOne(id);
    this.users = this.users.filter(user => user.id !== id);
    return removedUser;
  }
}
