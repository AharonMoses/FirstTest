let arr1 = [1, 2, 3, 4];
        document.write(arr1.map(n => n*5));

        document.write("<br>")
        document.write("<br>")

        let arr2 = [9, 11, 17, 31];
        document.write(arr2.findIndex(n => n>12));

        document.write("<br>")
        document.write("<br>")

        let arr3 = [2, 4, 6, 8];
        document.write(arr3.every(n => n%6==0));

        document.write("<br>")
        document.write("<br>")

        let arr4 = [1, 3, 5, 12];
        document.write(arr4.some(n => n>20));

        document.write("<br>")
        document.write("<br>")

        let arr5 = [1, "b", 2, "a"];
        document.write(arr5.filter(w => typeof w === "string"));

        document.write("<br>")
        document.write("<br>")

        let arr6 = ["3", 4, "6", 8];
        document.write(arr6.find(n => typeof n === "number" && n>5));

        document.write("<br>")
        document.write("<br>")

        let arr7 = [1, 2, 3, 4];
        document.write(arr7.map(n => n*2));

        document.write("<br>")
        document.write("<br>")

        let arr8 = [1, 3, 5, 7];
        document.write(arr8.every(n => n<9))

        document.write("<br>")
        document.write("<br>")

        let arr9 = [1, 2, 3, 4, 5, 6];
        document.write(arr9.filter(n => n%2!=0));

        document.write("<br>")
        document.write("<br>")

        let arr10 = ["banana", "mango", "apple"];
        document.write(arr10.map(word => word + "-java "));

        document.write("<br>")
        document.write("<br>")

        let arr11 = ["computer", "programming", " world", "hello"];
        document.write(arr11.findIndex(word => word.length>2));

        document.write("<br>")
        document.write("<br>")

        let arr12 = ["fox", "elephant", "dog", "cat"];
        document.write(arr12.every(word => word.length>4));

        document.write("<br>")
        document.write("<br>")

        let arr13 = ["date", "cherry", "banana", "apple"];
        document.write(arr13.some(word => word.startsWith("b")));

        document.write("<br>")
        document.write("<br>")

        let arr14 = ["grape", "orange", "banana", "apple"];
        document.write(arr14.filter(word => word.endsWith("e")));

        document.write("<br>")
        document.write("<br>")

        let arr15 = ["cherry", "banana", "apple"];
        document.write(arr15.find(word => word.includes("b")));