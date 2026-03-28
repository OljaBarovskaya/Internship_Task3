import { registeredUsers } from "@/data";
import * as type from "@/types";

function fetchRegisteredUsers(): Promise<type.SignUpFormData[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(registeredUsers);
    }, 2000);
  });
}

export function registerUser(
  userData: type.SignUpFormData,
): Promise<type.SignUpResult> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        for (let i = 0; i < registeredUsers.length; i++) {
          if (registeredUsers[i].email === userData.email) {
            return resolve("userExists");
          }
        }
        registeredUsers.push(userData);
        resolve("signUpSuccess");
      } catch {
        return reject("systemError");
      }
    }, 2000);
  });
}

export async function checkUser(userData: type.LoginFormData) {
  try {
    const registeredUsers = await fetchRegisteredUsers();
    const foundUser = registeredUsers.find(
      (user) => user.email === userData.email,
    );
    if (!foundUser) {
      return "userError";
    }
    if (foundUser.password === userData.password) {
      return "logInSuccess";
    }
    return "passwordError";
  } catch {
    return "systemError";
  }
}
