import { gql } from 'apollo-boost';

export const AddSneakerMutation = gql`
mutation AddSneaker($name: String!, $brandId: ID!){
    addSneaker(name: $name, brandId: $brandId){
        name
    }
}
`;

export const GetBrands = gql`
{
    brands{
        name
        id
        sneakers{
            name
            id
        }
    }
  }
`;