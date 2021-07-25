# iptables

端口放行

    apt-get update
    apt-get install iptables



    iptables -I INPUT -p tcp --dport 33456 -j ACCEPT
    iptables -I INPUT -p udp --dport 33456 -j ACCEPT
    iptables-save



打开2000~65534之间的端口

    iptables -A INPUT -p tcp --dport 2000:65534 -j ACCEPT

持久化

安装iptables-persistent

    apt-get install -y iptables-persistent

保存规则持续生效

    netfilter-persistent save
    netfilter-persistent reload

设置完成后指定端口就会持续放行了；



查看规则

    iptables -L





清除所有规则

    iptables -F


