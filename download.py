#!/usr/bin/python
# -*- coding: UTF-8 -*- 

import os,sys
import xlrd
import requests
import hashlib

global index
index = 0

def getSheet(index):
    filePath = os.path.dirname(os.path.realpath(__file__)) + "/" + "data.xlsx";
    book = xlrd.open_workbook(filePath)#得到Excel文件的book对象，实例化对象
    indexSheet = book.sheet_by_index(index) # 通过sheet索引获得sheet对象
    return indexSheet

def GetUrlInfo(url):
    urlPreHead = [
      'https://appnew.ly.com/hc/', 
      'https://css.40017.cn/touch/hb/c/', 
      'https://js.40017.cn/touch/hb/c/', 
      'https://img1.40017.cn/touch/hb/c/'
    ]

    #查找字符串头
    urlHead = ''
    for head in urlPreHead:
      if (url.find(head)) != -1:
        urlHead = head;

    # 截取url
    urlInfoDict = {}
    if len(urlHead) > 0:
        subPath = url[len(urlHead):]
        urlArr = subPath.split('/')
        urlInfoDict['projectId'] = urlArr[0]
        del urlArr[0]
        urlInfoDict['filename'] = urlArr[-1]
        del urlArr[-1]
        urlInfoDict['relativePath'] = '/'.join(urlArr) 

    return urlInfoDict

def mkdir(path): 
    # 去除首位空格
    path=path.strip()
    # 去除尾部 \ 符号
    path=path.rstrip("\\")
 
    # 判断路径是否存在
    # 存在     True
    # 不存在   False
    isExists=os.path.exists(path)
 
    # 判断结果
    if not isExists:
        # 如果不存在则创建目录
        # 创建目录操作函数
        os.makedirs(path)

def creatFile(path,content):
	with open(path, 'w') as f:
		f.write(content)

def downloadFile(url):
	global index
	index = index+1

	urlInFo = GetUrlInfo(url)
	if len(urlInFo['projectId']) > 0:
		dirPath = os.path.dirname(os.path.realpath(__file__)) + '/' + urlInFo['projectId'] + '/' + urlInFo['relativePath']
		mkdir(dirPath)

	response = requests.get(url)
	if response.status_code == 200:
		filePath = dirPath + '/' + urlInFo['filename']
		creatFile(filePath,response.content)
		result = verifyFile(filePath,response.headers['x-amz-meta-content-hash'])
		fileName = urlInFo['filename'].encode("utf-8")
		if result:
			# print(fileName + '下载成功')
			print(str(index) + '   ' + fileName + '   ' + '下载成功')
		else:
			print(str(index) + '   ' + fileName + '   ' + '下载失败')

#大文件的MD5值
def GetFileMd5(filename):
    if not os.path.isfile(filename):
        return
    myhash = hashlib.md5()
    f = file(filename,'rb')
    while True:
        b = f.read(8096)
        if not b :
            break
        myhash.update(b)
    f.close()
    return myhash.hexdigest()

def verifyFile(filePath,md5):
	fileMd5 = GetFileMd5(filePath)

	if fileMd5==md5:
		return True
	else:
		if os.path.exists(filePath):
			os.remove(filePath)
		return False

def js40017():
    js40017Sheet = getSheet(1);

    for n in range(1, 73):
        itemValue = js40017Sheet.cell(n,3).value
        if itemValue == 0:
            url = js40017Sheet.cell(n,0).value
            url = "https://js.40017.cn" + url
            downloadFile(url)

def css40017():
	css40017Sheet = getSheet(3);
	for n in range(1, 18):
		itemValue = css40017Sheet.cell(n,3).value
		if itemValue == 0:
			url = css40017Sheet.cell(n,0).value
			url = "https://css.40017.cn" + url
			downloadFile(url)

def reNameTask():
	nameList = ['https://appnew.ly.com/hc/1/js/myslider.js','https://js.40017.cn/touch/hb/c/2/js/lazyLoadJs.1.0.0.js']
	for url in nameList:
		urlInFo = GetUrlInfo(url)
		if len(urlInFo['projectId']) > 0:
			dirPath = os.path.dirname(os.path.realpath(__file__)) + '/' + urlInFo['projectId'] + '/' + urlInFo['relativePath']
			filePath = dirPath + '/' + urlInFo['filename']

			tempPath = os.path.join(dirPath, 'temp.js')
			distPath = os.path.join(dirPath, urlInFo['filename'].encode("utf-8"))

			if os.path.exists(filePath):
				os.rename(filePath, tempPath)
				os.rename(tempPath, distPath)

if __name__=="__main__":
    # js40017()
    # css40017()
    reNameTask()