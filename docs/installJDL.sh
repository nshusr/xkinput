clear
Get_SysPack_Name(){
    if grep -Eqii "CentOS" /etc/issue || grep -Eq "CentOS" /etc/*-release; then
        DISTRO='CentOS'
        PM='yum'
    elif grep -Eqi "Red Hat Enterprise Linux Server" /etc/issue || grep -Eq "Red Hat Enterprise Linux Server" /etc/*-release; then
        DISTRO='RHEL'
        PM='yum'
    elif grep -Eqi "Arch" /etc/issue || grep -Eq "Arch" /etc/*-release; then
        DISTRO='Aliyun'
        PM='pacman'
    elif grep -Eqi "Aliyun" /etc/issue || grep -Eq "Aliyun" /etc/*-release; then
        DISTRO='Aliyun'
        PM='yum'
    elif grep -Eqi "Fedora" /etc/issue || grep -Eq "Fedora" /etc/*-release; then
        DISTRO='Fedora'
        PM='yum'
    elif grep -Eqi "Debian" /etc/issue || grep -Eq "Debian" /etc/*-release; then
        DISTRO='Debian'
        PM='apt'
    elif grep -Eqi "Deepin" /etc/issue || grep -Eq "Deepin" /etc/*-release; then
        DISTRO='Deepin'
        PM='apt'
    elif grep -Eqi "Manjaro" /etc/issue || grep -Eq "Deepin" /etc/*-release; then
        DISTRO='Manjaro'
        PM='pacman'
    elif grep -Eqi "Ubuntu" /etc/issue || grep -Eq "Ubuntu" /etc/*-release; then
        DISTRO='Ubuntu'
        PM='apt'
    elif grep -Eqi "Linuxmint" /etc/issue || grep -Eq "Ubuntu" /etc/*-release; then
        DISTRO='Linuxmint'
        PM='apt'
    else
        DISTRO='当前不支持你的系统'
    fi
	echo "==========================================="
    echo "*当前系统为"$DISTRO"，将执行"$PM"安装方法。";
	echo "==========================================="
}

Get_SysPack_Name

git
#判断是否安装Git程序
if [ $? == 1 ]; then
    installed=true
else
    installed=false
fi
clear

installJdl(){
    pwd=$(pwd)
    rimeHome=~/.config/fcitx/rime
    if [ ! -d ./Rime_JD ]; then
        echo "开始克隆Rime键道…"
        git clone https://gitee.com/nshu/Rime_JD
    fi
    #切换到Linux工具目录执行安装程序
    if [ ! -f $rimeHome/xkjd6.dict.yaml ]; then
        cd $pwd/Rime_JD/Tools/SystemTools/LinuxTools
        if [ ! -f ./1install.sh]; then
            echo "未找到安装文件，请检查当前目录"
            ls
        else
            ./1install.sh
        fi
    else
        echo "已安装键道6，是否更新？ [y/n]"
        read isInstall
        if [[ $isInstall == [Yy] ]]; then
            cd $pwd/Rime_JD/Tools/SystemTools/LinuxTools
            if [ ! -f ./2update.sh]; then
                echo "未找到升级文件，请检查当前目录"
                ls
            else
                ./2update.sh
            fi
        else
            echo "已拒绝。"
            exit
        fi
    fi

}

#已安装Git则直接克隆Git项目
#未安装Git则，安装Git程序后，克隆项目
if [ $installed == "false" ]; then
    echo "未安装Git程序，将安装Git程序…"
    if [ $PM = "apt" ]; then
        sudo apt install git -y
    elif [ $PM = "yum" ]; then
        sudo yum install git -y
    elif [ $PM = "pacman" ]; then
        sudo pacman -S git -y
    fi

    installJdl
else
    installJdl
fi

