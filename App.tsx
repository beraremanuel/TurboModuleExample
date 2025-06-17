import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import NativeDeviceInfoTest from './specs/NativeDeviceInfoTest';

const UNKNOWN = '<unknown>';

function App(): React.JSX.Element {
  const info = {
    deviceModule: NativeDeviceInfoTest?.getDeviceModule() ?? UNKNOWN,
    isBatteryCharging: NativeDeviceInfoTest?.getIsBatteryCharging() ? 'Yes' : 'No',
    totalMemory: NativeDeviceInfoTest?.getTotalMemory() ?? UNKNOWN,
    readableVersion: NativeDeviceInfoTest?.getReadableVersion() ?? UNKNOWN,
    deviceBrand: NativeDeviceInfoTest?.getDeviceBrand() ?? UNKNOWN,
    device: NativeDeviceInfoTest?.getDevice() ?? UNKNOWN,
    deviceModel: NativeDeviceInfoTest?.getDeviceModel() ?? UNKNOWN,
    deviceManufacturer: NativeDeviceInfoTest?.getDeviceManufacturer() ?? UNKNOWN,
    product: NativeDeviceInfoTest?.getProduct() ?? UNKNOWN,
    osName: NativeDeviceInfoTest?.getOsName() ?? UNKNOWN,
    osVersion: NativeDeviceInfoTest?.getOsVersion() ?? UNKNOWN,
  };

  return (
    <SafeAreaView style={styles.background}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.lighter} />
      <Text style={styles.sectionTitle}>Device Info</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Device Module: <Text style={styles.infoValue}>{info.deviceModule}</Text></Text>
        <Text style={styles.infoLabel}>Is Battery Charging: <Text style={styles.infoValue}>{info.isBatteryCharging}</Text></Text>
        <Text style={styles.infoLabel}>Total Memory: <Text style={styles.infoValue}>{info.totalMemory}</Text></Text>
        <Text style={styles.infoLabel}>Readable Version: <Text style={styles.infoValue}>{info.readableVersion}</Text></Text>
        <Text style={styles.infoLabel}>Device Brand: <Text style={styles.infoValue}>{info.deviceBrand}</Text></Text>
        <Text style={styles.infoLabel}>Device: <Text style={styles.infoValue}>{info.device}</Text></Text>
        <Text style={styles.infoLabel}>Device Model: <Text style={styles.infoValue}>{info.deviceModel}</Text></Text>
        <Text style={styles.infoLabel}>Device Manufacturer: <Text style={styles.infoValue}>{info.deviceManufacturer}</Text></Text>
        <Text style={styles.infoLabel}>Product: <Text style={styles.infoValue}>{info.product}</Text></Text>
        <Text style={styles.infoLabel}>OS Name: <Text style={styles.infoValue}>{info.osName}</Text></Text>
        <Text style={styles.infoLabel}>OS Version: <Text style={styles.infoValue}>{info.osVersion}</Text></Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.lighter,
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 32,
    paddingHorizontal: 24,
  },
  infoContainer: {
    marginTop: 16,
    paddingHorizontal: 24,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 6,
  },
  infoValue: {
    fontWeight: '400',
  },
});

export default App;
