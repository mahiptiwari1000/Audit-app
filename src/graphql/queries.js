import { gql } from "@apollo/client";

const GET_ALL_FORMS = gql`
  query getAllForms {
    getAllForms {
      formId
      formTitle
      createdBy
    }
  }
`;

const queries = {
    GET_ALL_FORMS
}

export default queries