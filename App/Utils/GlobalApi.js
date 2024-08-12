import { request, gql } from 'graphql-request'
const Master_Url = 'https://api-ap-south-1.hygraph.com/v2/clsu7hq1a06cl07w2pbqxvvat/master';

const getSlider = async () => {
  const query = gql`
    query GetSlider {
        sliders {
          id
          name
          image {
            url
          }
        }
      }
      
    `
  const result = await request(Master_Url, query);
  return result;
}
const GetCategories = async () => {
  const query = gql`
    query GetCategory {
      categories {
        id
        name
        icon {
          url
        }
      }
    }
    `
  const result = await request(Master_Url, query);
  return result;
}
const GetBusinessList = async () => {
  const query = gql`
    query GetBusniessList {
      business_List {
        about
        id
        images {
          url
        }
        contactPerson
        address
        category {
          name
        }
        name
      }
    }    
    `
  const result = await request(Master_Url, query);
  return result;
}
const GetBusinessListByCategory = async (category) => {
  const query = gql`
  query GetBusniessList {
    business_List(where: {category: {name: "`+ category + `"}}) {
      about
      id
      name
      images {
        url
      }
      contactPerson
      address
      category {
        name
      }
    }
  }
  
  `;

  const result = await request(Master_Url, query);
  return result;
};
const CreateBooking = async (data) => {
  const mutationQuery = gql`
  mutation CreateBooking {
    createBooking(
      data: {
        bookingStatus: Booked, 
        businessList: {connect: {id: "`+ data.businessId + `"}
        }, 
        date: "`+ data.date + `", 
        time: "`+ data.time + `",
        userEmail: "`+ data.userEmail + `",
        userName: "`+ data.userName + `"
      }
    ) {
      id
    }
    publishManyBookings(to: PUBLISHED) {
      count
    }
  }
  `
  const result = await request(Master_Url, mutationQuery);
  return result;
}

const GetUserBookingDetails = async (userEmail) => {
  const query = gql`
  query GetUserBooking {
    bookings(
      orderBy: updatedAt_DESC
      where: {userEmail: "`+ userEmail + `"}
    ) {
      bookingStatus
      time
      userEmail
      userName
      date
      id
      business_List {
        id
        images {
          url
        }
        about
        address
        email
        name
        contactPerson
      }
    }
  }
  
  `;

  const result = await request(Master_Url, query);
  return result;
};

export default {
  getSlider,
  GetCategories,
  GetBusinessList,
  GetBusinessListByCategory,
  CreateBooking,
  GetUserBookingDetails
}
