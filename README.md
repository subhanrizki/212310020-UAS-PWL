# 212310020-UAS-PWL With K6 Grafana
Ujian Akhir Semester Pemrograman Web Lanjut 21

# Note
This test aims to measure how an application handles a large number of users or load over a certain period of time. The goal is to ensure the application remains stable and responsive under expected load.

# Installation
Source <sup> https://k6.io/docs/get-started/installation/ </sup>

# Linux
`sudo gpg -k < br/>
sudo gpg --no-default-keyring --keyring /usr/share/keyrings/k6-archive-keyring.gpg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69 < br/>
echo "deb [signed-by=/usr/share/keyrings/k6-archive-keyring.gpg] https://dl.k6.io/deb stable main" | sudo tee /etc/apt/sources.list.d/k6.list < br/>
sudo apt-get update < br/>
sudo apt-get install k6` < br/>
