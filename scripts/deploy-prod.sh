#!/bin/bash
USERNAME=root
HOSTS="163.44.207.198"

rm -rf web.zip .next
npm run build

for HOSTNAME in ${HOSTS} ; do
    ssh -l ${USERNAME} ${HOSTNAME} "cd vdbc/aada-web && git pull && rm -rf web.zip .next"
    scp -r .next ${USERNAME}@${HOSTNAME}:~/vdbc/aada-web
    ssh -l ${USERNAME} ${HOSTNAME} "cd vdbc/aada-web && npm install"
    ssh -l ${USERNAME} ${HOSTNAME} "cd vdbc/aada-web && pm2 restart aada-web || npm run start:pm2"
done