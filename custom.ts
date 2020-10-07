//% weight=100 color=#03AA74 icon="\uf1b9"
namespace どうさ　{
    let wait = 100
    let FL = 80
    let BR = 80
    let BL = 80
    //% block="まえすすめ"
    //% weight=89
    export function まえすすめ() {
         kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, 85)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo4, 85)
    basic.pause(wait)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, 58)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo3, 78)
    basic.pause(wait)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo4, 90)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, 90)
    basic.pause(wait)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, 95)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo4, 95)
    basic.pause(wait)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, 93)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo3, 113)
    basic.pause(wait)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo4, 90)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, 90)
    basic.pause(wait)
    }
}
