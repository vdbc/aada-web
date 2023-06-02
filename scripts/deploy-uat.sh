#!/bin/bash
USERNAME=root
HOSTS="150.95.111.106"

rm -rf web.zip .next
npm run build

for HOSTNAME in ${HOSTS} ; do
    ssh -l ${USERNAME} ${HOSTNAME} "cd vdbc/aada-web && git pull && npm i && rm -rf web.zip .next"
    scp -r .next ${USERNAME}@${HOSTNAME}:~/vdbc/aada-web
    ssh -l ${USERNAME} ${HOSTNAME} "cd vdbc/aada-web && pm2 restart aada-web || npm run start:pm2"
done