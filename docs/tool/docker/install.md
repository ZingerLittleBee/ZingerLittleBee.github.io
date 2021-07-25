# 安装

## 一键脚本(推荐)
### docker
```bash
curl -fsSL https://get.docker.com | bash
```
> 安装完 docker 默认是未启动的

启动 docker 服务

`systemctl start docker` 或 `service docker start`

设置 docker 服务开机启动

`systemctl enable docker.service`

查看 docker 服务运行状态

`systemctl status docker.service`

### docker-compose
```bash
curl -L "https://github.com/docker/compose/releases/download/1.25.3/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
chmod a+x /usr/local/bin/docker-compose
```

## 手动安装
参见 docker 文档 https://docs.docker.com/get-docker/
文档写的非常详细，我也就不废话了

## 查看版本
```bash
$ docker -v
Docker version 19.03.11, build 42e35e61f3
$ docker-compose -v
docker-compose version 1.25.3, build d4d1b42b
```