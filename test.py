import requests
from bs4 import BeautifulSoup
import json
import re

URL = "https://parade.com/937586/parade/life-quotes/"

page = requests.get(URL)
soup = BeautifulSoup(page.content, 'html.parser')
results = soup.find_all("p")
for i in results:
    i.text, "\n"


yolo = """1. “The purpose of our lives is to be happy.” — Dalai Lama

2. “Life is what happens when you’re busy making other plans.” — John Lennon

3. “Get busy living or get busy dying.” — Stephen King"""

regexp = re.compile(r'^[\d+]. (.*?)$', re.DOTALL | re.MULTILINE)
matches = regexp.findall(yolo)
json_data = json.dumps(matches, indent=4)
print(json_data)


# yolo = i.text  
regexp = re.compile(r'^[\d+]. (.*?)$', re.DOTALL | re.MULTILINE)
matches = regexp.findall(yolo)
json_data = json.dumps(matches, indent=4)
print(json_data)
