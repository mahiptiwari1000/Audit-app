import { gql } from "@apollo/client";

const ADD_ENTRY = gql`
mutation addEntry($formId: ID!,$formAnswers:[FormAnswerInput]) {
    addEntry(formId: $formId,formAnswers:$formAnswers)
  }
`;

const ADD_FORM = gql`
mutation addForm($createdBy: ID!,$formTitle:String,$formPrompts:[FormPromptInput]) {
    addForm(createdBy: $createdBy,formTitle:$formTitle,formPrompts:$formPrompts)
  }
`;

const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $role: UserRole!) {
    addUser(name: $name, email: $email, role: $role)
  }
`;

const UPDATED_ENTRY = gql`
mutation updateEntry($formId: ID!, $entryId: ID!, $formAnswers:[FormAnswerInput]) {
  updateEntry(formId: $formId, entryId: $entryId, formAnswers: $formAnswers)
}
`;

const mutations = {
  ADD_ENTRY,ADD_FORM,ADD_USER,UPDATED_ENTRY
};

export default mutations;
