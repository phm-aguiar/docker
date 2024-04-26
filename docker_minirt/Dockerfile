FROM ubuntu:20.04

# Install dependencies
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y \
    build-essential \
    clang-12 \
    make \
    git \
    libglfw3 \
    curl \
    cmake \
    pkg-config \
    libffi-dev \
    libgit2-dev \
    meson python3-pip \
    nano vim \
    zsh  xorg libxext-dev zlib1g-dev libbsd-dev && \
    pip3 install meson==0.55.0 && \
    git clone https://github.com/Snaipe/Criterion.git && \
    cd Criterion && \
    mkdir build && \
    cd build && \
    meson .. && \
    ninja && \
    ninja install && \
    ldconfig && \
    cd / && \
    sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" && \
    sed -i 's/plugins=(git)/plugins=(git zsh-autosuggestions zsh-syntax-highlighting)/g' ~/.zshrc && \
    git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions && \
    git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting && \
    echo "alias gcc='clang'" >> ~/.bashrc && \
    echo "alias gcc='clang'" >> ~/.zshrc && \
    chsh -s $(which zsh)


RUN mkdir /minirt
WORKDIR /minirt

ENTRYPOINT [ "zsh" ]
# xhost +  # sempre que for rodar o container uma vez por sessão
# docker run -it --name tdd -d -v /tmp/.X11-unix:/tmp/.X11-unix -v $PWD:/minirt -e DISPLAY=$DISPLAY minirt  # Run container uma vez por sessão
# docker start -i tdd # Start container uma vez por sessão