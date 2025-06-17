//NativeDeviceInfoTestModule.kt
package com.turbomoduleexample

import android.content.Context
import android.content.Intent
import android.content.IntentFilter
import android.content.SharedPreferences
import android.os.BatteryManager
import com.turbomoduleexample.NativeDeviceInfoTestSpec
import com.facebook.react.bridge.ReactApplicationContext
import android.os.Build


class NativeDeviceInfoTestModule(reactContext: ReactApplicationContext) : NativeDeviceInfoTestSpec(reactContext) {

  override fun getName() = NAME

  fun getBatteryState():String {
    
     val batteryStatus: Intent? = IntentFilter(Intent.ACTION_BATTERY_CHANGED).let { ifilter ->
         getReactApplicationContext().registerReceiver(null, ifilter)
     }
      val level: Int = batteryStatus?.getIntExtra(BatteryManager.EXTRA_LEVEL, -1) ?: -1
     val scale: Int = batteryStatus?.getIntExtra(BatteryManager.EXTRA_SCALE, -1) ?: -1

    val batteryPct: Float = level / scale.toFloat()
    return (batteryPct * 100).toInt().toString()
}

override fun getDeviceModule(): String {
    val deviceName = android.os.Build.MODEL
    val deviceModel = android.os.Build.MANUFACTURER + " " + deviceName
    return deviceModel
}

    override fun getIsBatteryCharging(): Boolean {
        val batteryStatus: Intent? = IntentFilter(Intent.ACTION_BATTERY_CHANGED).let { ifilter ->
            getReactApplicationContext().registerReceiver(null, ifilter)
        }
        val status: Int = batteryStatus?.getIntExtra(BatteryManager.EXTRA_STATUS, -1) ?: -1
        return status == BatteryManager.BATTERY_STATUS_CHARGING || status == BatteryManager.BATTERY_STATUS_FULL
    }

    override fun getTotalMemory(): String {
        val runtime = Runtime.getRuntime()
        val totalMemory = runtime.totalMemory()
        return totalMemory.toString()
    }

    override fun getReadableVersion(): String {
        val context = reactApplicationContext
        val packageInfo = context.packageManager.getPackageInfo(context.packageName, 0)
        return "${packageInfo.versionName} (${packageInfo.versionCode})"
    }

    override fun getDeviceBrand(): String {
        return Build.BRAND
    }

    override fun getDevice(): String {
        return Build.DEVICE
    }

    override fun getDeviceModel(): String {
        return Build.MODEL
    }

    override fun getDeviceManufacturer(): String {
        return Build.MANUFACTURER
    }

    override fun getProduct(): String {
        val context = reactApplicationContext
        val applicationInfo = context.applicationInfo
        val stringId = applicationInfo.labelRes
        return if (stringId == 0) {
            applicationInfo.nonLocalizedLabel.toString()
        } else {
            context.getString(stringId)
        }
    }

    override fun getOsName(): String {
        return "Android"
    }

    override fun getOsVersion(): String {
        return Build.VERSION.RELEASE
    }

    companion object {
        const val NAME = "NativeDeviceInfoTest"
    }
}