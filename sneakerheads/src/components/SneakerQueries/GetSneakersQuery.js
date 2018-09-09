import { gql } from 'apollo-boost';

export const GetSneakersQuery = gql`
{
    sneakers{
        id
        name
        brand{
            id
            name
        }
    }
}
`;