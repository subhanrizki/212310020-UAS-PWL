# 212310020-UAS-PWL With K6 Grafana
Ujian Akhir Semester Pemrograman Web Lanjut 21

# Note
This test aims to measure how an application handles a large number of users or load over a certain period of time. The goal is to ensure the application remains stable and responsive under expected load.

# Installation
Source <sup> https://k6.io/docs/get-started/installation/ </sup>

# Linux
`sudo gpg -k` \
`sudo gpg --no-default-keyring --keyring /usr/share/keyrings/k6-archive-keyring.gpg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69` \
`echo "deb [signed-by=/usr/share/keyrings/k6-archive-keyring.gpg] https://dl.k6.io/deb stable main" | sudo tee /etc/apt/sources.list.d/k6.list` 
`sudo apt-get update` 
`sudo apt-get install k6`

# Start
`k6 run LoadTesting.js`
<li> Wait untill the process is done, And you got it the results. </li>
<li> Just Simply like that, Correct me if i'm wrong</li>
<li> Thanks </li> 
