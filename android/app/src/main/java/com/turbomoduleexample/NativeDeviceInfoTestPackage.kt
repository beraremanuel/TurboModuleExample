package com.turbomoduleexample

import com.facebook.react.TurboReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.model.ReactModuleInfo
import com.facebook.react.module.model.ReactModuleInfoProvider

class NativeDeviceInfoTestPackage : TurboReactPackage() {

  override fun getModule(name: String, reactContext: ReactApplicationContext): NativeDeviceInfoTestModule? =
    if (name == NativeDeviceInfoTestModule.NAME) {
      NativeDeviceInfoTestModule(reactContext)
      
    } else {
      null
    }

  override fun getReactModuleInfoProvider() = ReactModuleInfoProvider {
    mapOf(
      NativeDeviceInfoTestModule.NAME to ReactModuleInfo(
        _name = NativeDeviceInfoTestModule.NAME,
        _className = NativeDeviceInfoTestModule.NAME,
        _canOverrideExistingModule = false,
        _needsEagerInit = false,
        isCxxModule = false,
        isTurboModule = true
      )
    )
  }
}