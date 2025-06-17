import { TurboModule, TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
    getDeviceModule(): string;
    getIsBatteryCharging(): boolean;
    getTotalMemory(): string;
    getReadableVersion(): string;
    getDeviceBrand(): string;
    getDevice(): string;
    getDeviceModel(): string;
    getDeviceManufacturer(): string;
    getProduct(): string;
    getOsName(): string;
    getOsVersion(): string;
}

export default TurboModuleRegistry.getEnforcing<Spec>(
    'NativeDeviceInfoTest',
) as Spec;
