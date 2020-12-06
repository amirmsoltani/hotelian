package com.hotelian;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.bridge.Arguments;

import java.util.ArrayList;
import java.util.Timer;
import java.util.TimerTask;

public class TimerModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;
    private ArrayList<Timer> timer_list;
    private int current;
    private DeviceEventManagerModule.RCTDeviceEventEmitter emitter;
    private WritableMap params;

    public TimerModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
        timer_list = new ArrayList<>();
        current = 0;
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
        Timer timer = new Timer("interval" + current);
        timer.schedule(task, timeout, timeout);
        timer_list.add(timer);
        current++;
        return current - 1;
    }

    @ReactMethod
    void clearInterval(int interval) {
        Timer timer = timer_list.get(interval);
        timer.cancel();
        timer.purge();
        timer_list.remove(interval);
    }
}
