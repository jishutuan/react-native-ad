package com.haxifang;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import com.bytedance.sdk.openadsdk.TTAdManager;
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.uimanager.ViewManager;
import com.facebook.react.bridge.JavaScriptModule;
import com.haxifang.ttad.AdManager;
import com.haxifang.ttad.Banner;
import com.haxifang.ttad.DrawFeed;
import com.haxifang.ttad.Feed;
import com.haxifang.ttad.Splash;
import com.haxifang.ttad.TTAdManagerHolder;

public class BytedAdPackage implements ReactPackage {
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();
        modules.add(new Splash(reactContext));
        modules.add(new AdManager(reactContext));
        return modules;
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Arrays.<ViewManager>asList(
                new DrawFeed(reactContext),
                new Feed(reactContext),
                new Banner(reactContext)
        );
    }
}
