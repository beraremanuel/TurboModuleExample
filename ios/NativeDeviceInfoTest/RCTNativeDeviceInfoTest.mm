//
//  RCTNativeDeviceInfoTest.m
//  TurboModuleExample
//
//  Created by Berar, Adrian (Cognizant) on 17.06.2025.
//

#import "RCTNativeDeviceInfoTest.h"

// Interface declaration - can be used to declare private properties and methods
@interface RCTNativeDeviceInfoTest()
@end

// Implementation of RCTNativeDeviceInfoTest
@implementation RCTNativeDeviceInfoTest

// Register this class as a native module with React Native
// The name 'NativeDeviceInfoTest' will be used to reference this module in JavaScript
RCT_EXPORT_MODULE(NativeDeviceInfoTest)

// Initialize the module. This is called when the module is first created
- (instancetype)init {
  self = [super init];
  if (self) {
  }
  return self;
}

// Get device model and iOS version information
// Returns: String in format "<device type> <iOS version>"
- (NSString *)getDeviceModule {
  UIDevice *device = [UIDevice currentDevice];
  NSString *deviceModel = device.model;  // Get device type (iPhone/iPad/iPod)
  
  // Append iOS version to device model
  // Note: This could be simplified since all cases do the same thing,
  // but keeping the structure for potential future device-specific handling
  if ([deviceModel isEqualToString:@"iPhone"]) {
    deviceModel = [NSString stringWithFormat:@"%@ %@", deviceModel, device.systemVersion];
  } else if ([deviceModel isEqualToString:@"iPad"]) {
    deviceModel = [NSString stringWithFormat:@"%@ %@", deviceModel, device.systemVersion];
  } else if ([deviceModel isEqualToString:@"iPod touch"]) {
    deviceModel = [NSString stringWithFormat:@"%@ %@", deviceModel, device.systemVersion];
  } else {
    deviceModel = [NSString stringWithFormat:@"%@ %@", deviceModel, device.systemVersion];
  }
  return deviceModel;
}

- (BOOL)getIsBatteryCharging {
  UIDevice *device = [UIDevice currentDevice];
  device.batteryMonitoringEnabled = YES;  // Enable battery monitoring
  return device.batteryState == UIDeviceBatteryStateCharging || device.batteryState == UIDeviceBatteryStateFull;
}

- (NSString *)getTotalMemory {
  unsigned long long totalMemory = [[NSProcessInfo processInfo] physicalMemory];
  return [NSString stringWithFormat:@"%llu", totalMemory];
}

- (NSString *)getReadableVersion {
  NSString *version = [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleShortVersionString"];
  NSString *build = [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleVersion"];
  return [NSString stringWithFormat:@"%@ (%@)", version, build];
}

- (NSString *)getDeviceBrand {
  return @"Apple";
}

- (NSString *)getDevice {
  UIDevice *device = [UIDevice currentDevice];
  return device.name;
}

- (NSString *)getDeviceModel {
  UIDevice *device = [UIDevice currentDevice];
  return device.model;
}

- (NSString *)getDeviceManufacturer {
  return @"Apple";
}

- (NSString *)getProduct {
  return [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleName"];
}

- (NSString *)getOsName {
  return [[UIDevice currentDevice] systemName];
}

- (NSString *)getOsVersion {
  return [[UIDevice currentDevice] systemVersion];
}

// Required for New Architecture (TurboModules)
// Creates and returns a C++ TurboModule instance for this native module
- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:(const facebook::react::ObjCTurboModule::InitParams &)params {
  return std::make_shared<facebook::react::NativeDeviceInfoTestSpecJSI>(params);
}

@end
