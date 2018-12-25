class AddModal extends Component {
  constructor(props) {
      super(props);
      this.state = {
          newFoodName: '',
          newImageUrl: '',
          newDescription: ''
      }
  }
  showAddModal() {
      this.refs.myModal.open();
  }
  render() {
      return (
          <Modal ref={'myModal'}
              style={{
                  justifyContent: 'center',
                  borderRadius: 30,
                  shadowRadius: 10,
                  width: Dimensions.get('window').width - 80,
                  height: 280
              }}
              position='center'
              backdrop={true}
              onClosed={() => {

              }}>
              <Text style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 40
              }}>
                  New Drink information
              </Text>
              <TextInput style={{
                  height: 40,
                  borderBottomColor: 'gray',
                  marginLeft: 30,
                  marginRight: 30,
                  marginTop: 20,
                  marginBottom: 10,
                  borderBottomWidth: 1
              }}
                  placeholder='Enter food name'
                  value={this.state.newFoodName}
                  onChangeText={(text) => this.setState({ newFoodName: text })}>

              </TextInput>
              <TextInput style={{
                  height: 40,
                  borderBottomColor: 'gray',
                  marginLeft: 30,
                  marginRight: 30,
                  marginTop: 20,
                  marginBottom: 20,
                  borderBottomWidth: 1
              }}
                  placeholder='Enter Description'
                  value={this.state.newDescription}
                  onChangeText={(text) => this.setState({ newDescription: text })}>

              </TextInput>
              <Button style={{ fontSize: 18, color: 'white' }}
                  containerStyle={{
                      padding: 8,
                      marginLeft: 80,
                      marginRight: 80,
                      height: 40,
                      borderRadius: 6,
                      backgroundColor: 'mediumseagreen'
                  }}
                  onPress={() => {
                      if (this.state.newFoodName.length == 0 || this.state.newDescription == 0) {
                          alert('You must enter food"s" name and description');
                          return;
                      }
                      const newFood = {
                          key: '6',
                          name: this.state.newFoodName,
                          image_url: 'http://imgs.vietnamnet.vn/Images/2017/06/16/11/20170616110608-hoa-qua.jpg',
                          description: this.state.newDescription
                      }
                      listData.push(newFood);
                      this.props.parentFlatList.refreshFlatList(1);
                      this.refs.myModal.close();
                      this.setState({ newFoodName: '', newDescription: '' });

                  }}>
                  Save
              </Button>
          </Modal>
      )
  }
}



//edit model
class EditModal extends Component {
  constructor(props) {
      super(props);
      this.state = {
          newFoodName: '',
          newImageUrl: '',
          newDescription: ''
      }
  }
  showEditModal(editFood, flatListItem) {
      this.setState({
          key: editFood.key,
          newFoodName: editFood.name,
          newDescription: editFood.description,
          flatListItem: flatListItem
      });
      this.refs.myModal.open();
  }
  render() {
      return (
          <Modal ref={'myModal'}
              style={{
                  justifyContent: 'center',
                  borderRadius: 30,
                  shadowRadius: 10,
                  width: Dimensions.get('window').width - 80,
                  height: 280
              }}
              position='center'
              backdrop={true}
              onClosed={() => {

              }}>
              <Text style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 40
              }}>
                  Drink information
              </Text>
              <TextInput style={{
                  height: 40,
                  borderBottomColor: 'gray',
                  marginLeft: 30,
                  marginRight: 30,
                  marginTop: 20,
                  marginBottom: 10,
                  borderBottomWidth: 1
              }}
                  placeholder='Enter food name'
                  value={this.state.newFoodName}
                  onChangeText={(text) => this.setState({ newFoodName: text })}>

              </TextInput>
              <TextInput style={{
                  height: 40,
                  borderBottomColor: 'gray',
                  marginLeft: 30,
                  marginRight: 30,
                  marginTop: 20,
                  marginBottom: 20,
                  borderBottomWidth: 1
              }}
                  placeholder='Enter Description'
                  value={this.state.newDescription}
                  onChangeText={(text) => this.setState({ newDescription: text })}>

              </TextInput>
              <Button style={{ fontSize: 18, color: 'white' }}
                  containerStyle={{
                      padding: 8,
                      marginLeft: 80,
                      marginRight: 80,
                      height: 40,
                      borderRadius: 6,
                      backgroundColor: 'mediumseagreen'
                  }}
                  onPress={() => {
                      if (this.state.newFoodName.length == 0 || this.state.newDescription == 0) {
                          alert("You must enter food's name and description");
                          return;
                      }
                      let foundIndex = listData.findIndex(item => this.state.key == item.key);
                      console.log(foundIndex);
                      if (foundIndex < 0) {
                          return;
                      }
                      listData[foundIndex].name = this.state.newFoodName;
                      listData[foundIndex].description = this.state.newDescription;
                      this.refs.myModal.close();
                      this.state.flatListItem.refreshFlatListItem();
                      // this.setState({ newFoodName: '', newDescription: '' });
                  }}>
                  Save
              </Button>
          </Modal>
      )
  }
}