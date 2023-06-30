#!/bin/bash
USERNAME=root
HOSTS="150.95.111.106"

rm -rf web.zip .next
npm i
npm run build
for HOSTNAME in ${HOSTS} ; do
    ssh -l ${USERNAME} ${HOSTNAME} "cd vdbc/dev-ops/aada-web && git pull && rm -rf .next public"
    scp -r web.zip ${USERNAME}@${HOSTNAME}:~/vdbc/dev-ops/aada-web
    ssh -l ${USERNAME} ${HOSTNAME} "cd vdbc/dev-ops/aada-web && unzip -o ./web.zip"
    ssh -l ${USERNAME} ${HOSTNAME} "cd vdbc/dev-ops/aada-web && npm run stop:pm2"
    ssh -l ${USERNAME} ${HOSTNAME} "cd vdbc/dev-ops/aada-web && npm run start:pm2 && pm2 save"
done