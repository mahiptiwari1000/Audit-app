import { gql } from "@apollo/client";

const GET_ALL_FORMS = gql`
  query getAllForms($first:Int,$skip:Int) {
    getAllForms(first:$first,skip:$skip){
      formId
      formTitle
      createdBy
    }
  }
`;

const GET_AN_ENTRY = gql`
  query getAnEntry($entryId:ID!) {
    getAnEntry(entryId:$entryId) {
      formAnswers{
        formAnswer
        formAnswerComment
        formPrompt
      }
    }
  }
`;

const GET_FORM_DETAILS = gql`
query getFormDetails($formId:ID!) {
  getFormDetails(formId:$formId) {
    formId
    formPrompts {
      formInputType
      formQues
    }
    formTitle
  }
}
`;

const GET_USER_DETAILS = gql`
query getUserDetails($email:String!){
  getUserDetails(email:$email){
    email,
    name,
    role
  }
}
`;

const queries = {
  GET_ALL_FORMS,GET_AN_ENTRY,GET_FORM_DETAILS,GET_USER_DETAILS
};

export default queries;
