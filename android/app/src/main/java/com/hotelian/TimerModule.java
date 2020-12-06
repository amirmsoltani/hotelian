package com.hotelian;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.bridge.Arguments;

import java.sql.Time;
import java.util.Hashtable;
import java.util.Timer;
import java.util.TimerTask;

public class TimerModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;
    private Hashtable<String, Timer> timer_list;
    private int current;
    private DeviceEventManagerModule.RCTDeviceEventEmitter emitter;
    private WritableMap params;

    public TimerModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
        timer_list = new Hashtable<String, Timer>();
    }

    @Override
    public String getName() {
        return "Timer";
    }

    @ReactMethod()
    int intervalEvent(String name, int timeout) {
        if (emitter == null) {
            emitter = reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class);
        }
        final TimerTask task = new TimerTask() {
            @Override
            public void run() {
                params = Arguments.createMap();
                emitter.emit(name, params);
            }
        };
        Timer timer = new Timer(name);
        timer.schedule(task, timeout, timeout);
        timer_list.put(name, timer);
        return current - 1;
    }

    @ReactMethod
    void clearInterval(String name) {
        Timer timer = timer_list.get(name);
        timer.cancel();
        timer.purge();
        timer_list.remove(name);
    }
}
