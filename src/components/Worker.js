import React from 'react';
import {
  Text,
  View,
  Image
 } from 'react-native';
import {
  Card,
  Header,
  CardSection
}
from './common';

const Worker = (props) => { //  services => serviceName, experience, price. can be a list/array
  // const { firstName, lastName, proffession, email, dateOfBirth, id,
  //    photoUrl, services, about } = this.props;
    return (
      <Card>
      <Header headerText={'Tinder man'} />
      <CardSection>
      <View>
        <Text>
        type? proffession? Sex expert
        Date of Birth: dd/mm/yyyyy
        contact:
          email:
          phone?:
          leave a message
        Services: might be a list. contains: name, maybe level of experience, and price.
        Skills => either as a map or dropdown
        </Text>
      </View>
      </CardSection>      
      </Card>
    );
};

const styles = {
  layoutStyle: {
    flex: 1
  }
};

export default Worker;
