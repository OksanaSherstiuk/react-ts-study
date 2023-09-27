export interface AppProps {
  title: string
}

//Can be specified as below for the type of users
// interface Users {
//   name: {
//     first: string
//     last: string
//   }
//   login: {
//     uuid: string
//   }
//   email: string
// }

//Can be specified as below for individual properties that can be used elsewhere
//that Name can be also used somewhere else
export interface Name {
  first: string
  last: string
}

//this is also valid syntax for TypeScript
// type Login = {
//   uuid: string
// }

export interface Login {
  uuid: string
}

//This interpretation looks more readable than the first version
export interface Users {
  name: Name //Name is defined above
  login: Login //Login is defined above
  email: string
}
