import React, { Component } from "react";
import { Image } from "react-native";
import { Container, Content, Card, CardItem, Body, Text } from "native-base";
import { withNavigation } from "react-navigation";
class Profile extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Image
                  source={{
                    uri:
                      "https://whatstatus.co/wp-content/uploads/2018/08/geek-boys-whatsapp-dp-1-300x300.jpg"
                  }}
                  style={{
                    height: 200,
                    width: 200,
                    flex: 1
                  }}
                />
                <Text />
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default withNavigation(Profile);
