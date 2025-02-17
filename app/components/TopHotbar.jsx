import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import Settings from "../Settings"; // Import the Settings popup

const TopHotbar = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false); // Track Settings popup state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("FAQ"); // Tracks which section is active (FAQ or Help)

  const [fontsLoaded] = useFonts({
    VT323: require("../../assets/fonts/VT323-Regular.ttf"), // Adjust path as necessary
  });

  // Ensure fonts are loaded before rendering
  if (!fontsLoaded) {
    return null;
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  return (
    <>
      {/* TopHotbar */}
      <View style={styles.container}>
        {/* Hamburger Button */}
        <TouchableOpacity
          onPress={toggleSidebar}
          style={styles.hamburgerTouchable}
        >
          <Image
            source={require("../../assets/images/hamburgericon.png")}
            style={styles.hamburgericon}
          />
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.text}>BUDGET PLANT</Text>

        {/* Cogwheel Icon */}
        <TouchableOpacity
          onPress={toggleSettings}
          style={styles.cogwheelTouchable}
        >
          <Image
            source={require("../../assets/images/cogwheel.png")}
            style={styles.cogwheel}
          />
        </TouchableOpacity>
      </View>

      {/* Sidebar */}
      {isSidebarOpen && (
        <View style={styles.sidebar}>
          {/* Close Button */}
          <TouchableOpacity onPress={toggleSidebar} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>✖</Text>
          </TouchableOpacity>

          {/* Navigation Buttons */}
          <View style={styles.navButtons}>
            <TouchableOpacity
              onPress={() => setActiveSection("FAQ")}
              style={[
                styles.navButton,
                activeSection === "FAQ" && styles.activeNavButton,
              ]}
            >
              <Text style={styles.navButtonText}>FAQ</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setActiveSection("Help")}
              style={[
                styles.navButton,
                activeSection === "Help" && styles.activeNavButton,
              ]}
            >
              <Text style={styles.navButtonText}>Help</Text>
            </TouchableOpacity>
          </View>

          {/* Content Based on Active Section */}
          {activeSection === "FAQ" && (
            <View>
              <Text style={styles.sidebarTitle}>FAQ</Text>
              <Text style={styles.sidebarItem}>
                Question 1: How do I set or update my budget?
                </Text>
                <Text style={styles.sidebarItem1}>
                Go to the Profile section, find the budget input field, enter your desired budget, and tap "Save Profile".
              </Text>
              <Text style={styles.sidebarItem}>
                Question 2:  How do I delete my budget data?
              </Text>
              <Text style={styles.sidebarItem1}>
              You can delete your budget data by resetting the budget to zero in the Profile section or clearing the app data from your device settings.
              </Text>
              <Text style={styles.sidebarItem}>
                Question 3: How is my data secured in this app?
              </Text>
              <Text style={styles.sidebarItem1}>
              Your data is encrypted and stored securely on your device. We do not share your data with third parties without your consent.
              </Text>
            </View>
          )}
          {activeSection === "Help" && (
            <View>
              <Text style={styles.sidebarTitle}>Help</Text>
              <Text style={styles.sidebarItem}>
                Help Topic 1: What to Do if the App Crashes
              </Text>
              <Text style={styles.sidebarItem1}>
              If the app crashes, restart it. Ensure you’re using the latest version by checking the app store. If the issue persists, contact support at support@example.com.
              </Text>
              <Text style={styles.sidebarItem}>
                Help Topic 2: Managing Notifications
              </Text>
              <Text style={styles.sidebarItem1}>
                To manage notifications, go to the Settings section of the app. Enable or disable notifications based on your preferences.
              </Text>
              <Text style={styles.sidebarItem}>
                Help Topic 3: Can I view a history of my budgets?
              </Text>
              <Text style={styles.sidebarItem1}>
              Currently, budget history tracking is not available, but we’re working on adding this feature in future updates.
              </Text>
            </View>
          )}
        </View>
      )}

      {/* Settings Popup */}
      {isSettingsOpen && <Settings onClose={() => setIsSettingsOpen(false)} />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    marginBottom: "15%",
  },
  text: {
    fontFamily: "VT323",
    fontSize: 36,
    fontWeight: "bold",
    color: "#f5eed5",
    alignItems: "center",
  },
  cogwheelTouchable: {
    position: "absolute",
    right: 25,
  },
  cogwheel: {
    width: 50,
    height: 50,
  },
  hamburgerTouchable: {
    position: "absolute",
    left: 25,
  },
  hamburgericon: {
    width: 25,
    height: 50,
  },
  sidebar: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 300,
    height: "100%", // Ensure it takes the full height of the screen
    backgroundColor: "#4f455e",
    padding: 20,
    zIndex: 1000,
  },
  sidebarTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#f5eed5",
    marginBottom: 20,
    fontFamily: "VT323", // Ensure font is applied
  },
  sidebarItem: {
    fontSize: 20,
    color: "#fcb761",
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: "VT323", // Ensure font is applied
  },
  sidebarItem1: {
    fontSize: 20,
    color: "#f5eed5",
    fontWeight: "bold",
    marginBottom: 10,
    fontFamily: "VT323", // Ensure font is applied
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  closeButtonText: {
    fontSize: 24,
    color: "#f5eed5",
    fontFamily: "VT323", // Ensure font is applied
  },
  navButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  navButton: {
    backgroundColor: "#4f455e",
    padding: 10,
    borderRadius: 5,
  },
  activeNavButton: {
    backgroundColor: "#555",
  },
  navButtonText: {
    color: "#f5eed5",
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "VT323", // Ensure font is applied
  },
});

export default TopHotbar;
