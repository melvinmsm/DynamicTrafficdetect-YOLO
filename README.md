# DynamicTrafficdetect-YOLO
To run this project firstly download weights file from the official yolo documentation page.

After that, run the following commands on either cmd or suitable code editor:-
1. For images-  python yolo.py --image images/imgName.jpg --yolo yolo-coco

2. For Videos-  python yolo_video.py --input videos/videoName.mp4 --output output/name_output.avi --yolo yolo-coco

  
The project can be used in two ways:-
1. Running the commands on editor to get different vehicle type and their count as output.
2. Running the commands and then storing vehicle count in a log file to perform further operations on the data generated.  
