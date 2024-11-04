import {
  View,
  Text,
  TextInput,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
} from "react-native";
import React, { useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"; // Changed import
import { Picker } from "@react-native-picker/picker";

export default function TopNavigation() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [filterDialogVisible, setFilterDialogVisible] = useState(false);
  const [searchText, setSearchText] = useState("");

  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);

  const openMenu = () => {
    console.log("Menu opened"); // Debug log
    setMenuVisible(true);
  };

  const closeMenu = () => {
    console.log("Menu closed"); // Debug log
    setMenuVisible(false);
  };

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
    if (!searchVisible) {
      closeMenu();
    }
  };

  const toggleFilterDialog = () => {
    setFilterDialogVisible(!filterDialogVisible);
    setSearchVisible(false);
    closeMenu();
  };

  const handleOutsidePress = () => {
    if (searchVisible) {
      setSearchVisible(false);
      Keyboard.dismiss();
    }
    if (filterDialogVisible) {
      setFilterDialogVisible(false);
    }
    if (menuVisible) {
      closeMenu();
    }
  };

  const handleMenuOptionPress = (option) => {
    console.log(`Selected: ${option}`);
    closeMenu();
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={handleOutsidePress}>
        <View className="flex-row items-center justify-between px-4 py-2 bg-gray-200">
          {!searchVisible && (
            <Text className="text-lg font-bold text-black flex-1">
              Loan Tracker
            </Text>
          )}
          <View className="flex-row items-center">
            {searchVisible ? (
              <View className="flex-row items-center flex-1">
                <MaterialCommunityIcons
                  name="arrow-left"
                  size={28}
                  color="black"
                  onPress={toggleSearch}
                  style={{ marginRight: 8 }}
                />
                <TextInput
                  className="border border-gray-400 rounded px-2 h-8 flex-1 bg-white"
                  placeholder="Search..."
                  value={searchText}
                  onChangeText={setSearchText}
                  onBlur={() => setSearchVisible(false)}
                />
              </View>
            ) : (
              <>
                <MaterialCommunityIcons
                  name="magnify"
                  size={28}
                  color="black"
                  style={{ marginHorizontal: 8 }}
                  onPress={toggleSearch}
                />
                <MaterialCommunityIcons
                  name="filter"
                  size={26}
                  color="black"
                  style={{ marginHorizontal: 8 }}
                  onPress={toggleFilterDialog}
                />
                <TouchableOpacity onPress={openMenu}>
                  <MaterialCommunityIcons
                    name="dots-vertical"
                    size={28}
                    color="black"
                  />
                </TouchableOpacity>
                {menuVisible && (
                  <View className="absolute right-0 top-12 bg-white border border-gray-400 rounded shadow-md z-50">
                    <TouchableOpacity
                      onPress={() => handleMenuOptionPress("Option 1")}
                      className="px-4 py-2"
                    >
                      <Text>Option 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => handleMenuOptionPress("Option 2")}
                      className="px-4 py-2"
                    >
                      <Text>Option 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => handleMenuOptionPress("Option 3")}
                      className="px-4 py-2"
                    >
                      <Text>Option 3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={closeMenu}
                      className="px-4 py-2 border-t border-gray-400"
                    >
                      <Text className="text-red-500">Close</Text>
                    </TouchableOpacity>
                  </View>
                )}
              </>
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>

      <Modal
        visible={filterDialogVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setFilterDialogVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-slate-100 bg-opacity-50">
          <View className="bg-white rounded-lg p-4 w-4/5 max-w-md">
            <Text className="text-xl font-bold mb-4">Filter Options</Text>

            <Text className="mb-2">Option 1:</Text>
            <View className="border border-gray-400 rounded">
              <Picker
                selectedValue={selectedOption1}
                onValueChange={(itemValue) => setSelectedOption1(itemValue)}
                style={{ height: 50, width: "100%" }}
              >
                <Picker.Item label="Select Option" value={null} />
                <Picker.Item label="Option 1A" value="1A" />
                <Picker.Item label="Option 1B" value="1B" />
                <Picker.Item label="Option 1C" value="1C" />
              </Picker>
            </View>

            <Text className="mb-2 mt-4">Option 2:</Text>
            <View className="border border-gray-400 rounded">
              <Picker
                selectedValue={selectedOption2}
                onValueChange={(itemValue) => setSelectedOption2(itemValue)}
                style={{ height: 50, width: "100%" }}
              >
                <Picker.Item label="Select Option" value={null} />
                <Picker.Item label="Option 2A" value="2A" />
                <Picker.Item label="Option 2B" value="2B" />
                <Picker.Item label="Option 2C" value="2C" />
              </Picker>
            </View>

            <Text className="mb-2 mt-4">Option 3:</Text>
            <View className="border border-gray-400 rounded">
              <Picker
                selectedValue={selectedOption3}
                onValueChange={(itemValue) => setSelectedOption3(itemValue)}
                style={{ height: 50, width: "100%" }}
              >
                <Picker.Item label="Select Option" value={null} />
                <Picker.Item label="Option 3A" value="3A" />
                <Picker.Item label="Option 3B" value="3B" />
                <Picker.Item label="Option 3C" value="3C" />
              </Picker>
            </View>

            <View className="flex-row justify-end mt-4 space-x-4">
              <View className="rounded-sm">
                <Button
                  title="Apply"
                  onPress={() => setFilterDialogVisible(false)}
                  color="green"
                />
              </View>
              <View>
                <Button
                  title="Close"
                  onPress={() => setFilterDialogVisible(false)}
                  color="gray"
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}
