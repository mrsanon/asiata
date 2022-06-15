
FROM  fusuf/whatsasena:latest
RUN git clone https://github.com/mrsanon/asiata /root/asiata
WORKDIR /root/asiata/
ENV TZ=Europe/Istanbul
RUN yarn add supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
