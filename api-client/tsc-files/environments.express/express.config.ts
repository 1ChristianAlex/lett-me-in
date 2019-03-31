import os from "os";
let ip = os.networkInterfaces();
export const express_conf ={
    ip:ip.Ethernet[1].address,
    port:3000
}