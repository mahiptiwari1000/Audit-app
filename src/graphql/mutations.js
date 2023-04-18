import { gql } from "@apollo/client";

// const ADD_ENTRY = gql`
// mutation addEntry($formId: ID!,formAnswers) {
//     addTodo(type: $type)
//   }
// `;

const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $role: UserRole!) {
    addUser(name: $name, email: $email, role: $role)
  }
`;

const mutations = {
  ADD_USER,
};

export default mutations;
