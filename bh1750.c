#include <wiringPiI2C.h>
#include <stdio.h>
#include <unistd.h>

int main (void)
{
  int handle = wiringPiI2CSetup(0x23);

    // One-time measurement at 0.5 lx resolution. Measurement Time is typically 120ms.
    // It is automatically set to Power Down mode after measurement.
    wiringPiI2CWrite(handle, 0x21);

    sleep(1);

    // read sensor data
    int word = wiringPiI2CReadReg16(handle, 0x00);
    int lux = ((word & 0xff00)>>8) | ((word & 0x00ff)<<8);
    int percent = (100.0/65535.0)*lux;

    // print measured value
    printf("Current light: %d Lux (%d%)\n", lux, percent);

    return 0;
}