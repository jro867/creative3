var app = angular.module('News', ['ui.router', 'firebase']).config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/home',
        templateUrl: '/home.html',
        controller: 'MainCtrl',
    }).state('posts', {
        url: '/posts/{id}',
        templateUrl: '/posts.html',
        controller: 'PostCtrl',
    });
    $urlRouterProvider.otherwise('home');
}]);

app.controller('MainCtrl', ['$scope', '$sce', '$firebaseArray', '$firebaseObject', function($scope, $sce, $firebaseArray, $firebaseObject) {
    var ref = new Firebase("https://creative3-2ce63.firebaseio.com/");
    var talksRef = new Firebase("https://creative3-2ce63.firebaseio.com/talks");

    // add new talks to the array
    $scope.addMessage = function() {
        if ($scope.message && $scope.sender) {
          $scope.talks.$add({
            message: $scope.message,
            sender: $scope.sender,
            timeStamp: Date.now(),
          });
        }
    };

    $scope.trustHTML = function(html) {
        var trusted = $sce.trustAsHtml(html);
        return trusted;
    }

    // get the talks as a synchronized array
    $scope.talks = $firebaseArray(talksRef);
    $scope.talks.$loaded().then(function() {
        // talks have been loaded
    });

    $scope.resetDB = function() {
        var talksJSON = {
          "talks": [
          {
            "session": "general-women",
            "title": "We can bring the light of the gospel into our homes, schools, and workplaces if we look for and share positive things about others.",
            "snip": "<p class='snip'>In response to Sister Linda K. Burton’s invitation at April’s general conference,1 many of you have been involved in thoughtful and generous acts of charity focused on meeting the needs of refugees in your local area. From simple, one-on-one efforts to community-wide programs, those acts are the result of love. As you have shared your time, talents, and resources, your—and the refugees’—hearts have been lightened. The building of hope and faith and even greater love between receiver and giver are inevitable results of true charity.</p>",
            "fulltext": [
              "<p class='full-text'>In response to Sister Linda K. Burton&#x2019;s invitation at April&#x2019;s general conference,1 many of you have been involved in thoughtful and generous acts of charity focused on meeting the needs of refugees in your local area. From simple, one-on-one efforts to community-wide programs, those acts are the result of love. As you have shared your time, talents, and resources, your&#x2014;and the refugees&#x2019;&#x2014;hearts have been lightened. The building of hope and faith and even greater love between receiver and giver are inevitable results of true charity.</p>",
              "<p class='full-text'>The prophet Moroni tells us that charity is an essential characteristic of those who will live with Heavenly Father in the celestial kingdom. He writes, &#x201C;Except ye have charity ye can in nowise be saved in the kingdom of God.&#x201D;</p>",
                "<p class='full-text'>Of course, Jesus Christ is the perfect embodiment of charity. His premortal offering to be our Savior, His interactions throughout His mortal life, His supernal gift of the Atonement, and His continual efforts to bring us back to our Heavenly Father are the ultimate expressions of charity. He operates with a singular focus: love for His Father expressed through His love for each of us. When asked about the greatest commandment, Jesus answered:</p>",
              "<p class='full-text'>“Thou shalt love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind.</p>",
              "<p class='full-text'>One of the most significant ways we can develop and demonstrate love for our neighbor is through being generous in our thoughts and words. Some years ago a cherished friend noted, &#x201C;The greatest form of charity may be to withhold judgment.&#x201D;4 That is still true today.</p>",
              "<p class='full-text'>Recently, as three-year-old Alyssa watched a movie with her siblings, she remarked with a puzzled expression, &#x201C;Mom, that chicken is weird!&#x201D;</p>"
            ],
            "image":"images/jean_b_brigham.png",
            "comment": [],
            "vote": "0"
          }, {
            "session": "general-women",
            "title": "The Master Healer",
            "snip": "<p class='snip'>One of my most rewarding opportunities is to travel—to learn from my sisters throughout the world. There’s nothing like being arm in arm, face to face, and heart to heart with you.</p>",
            "fulltext": [
              "<p class='full-text'>One of my most rewarding opportunities is to travel&#x2014;to learn from my sisters throughout the world. There&#x2019;s nothing like being arm in arm, face to face, and heart to heart with you.</p>",
              "<p class='full-text'>During one such experience, a Relief Society leader asked, “Is there something specific that women should focus on?”</p>",
                "<p class='full-text'>I answered, &#x201C;Yes!&#x201D; as President Russell M. Nelson&#x2019;s talk &#x201C;A Plea to My Sisters&#x201D; entered my mind. President Nelson taught, &#x201C;We need women who have a bedrock understanding of the doctrine of Christ.&#x201D;</p>",
                "<p class='full-text'>&#x201C;And now &#x2026; I would ask if all is done? Behold, I say unto you, Nay; for ye have not come thus far save it were by the word of Christ with unshaken faith in him, relying wholly upon the merits of him who is mighty to save.</p>",
              "<p class='full-text'>&#x201C;Wherefore, ye must press forward with a steadfastness in Christ, having a perfect brightness of hope, and a love of God and of all men. Wherefore, if ye shall press forward, feasting upon the word of Christ, and endure to the end, behold, thus saith the Father: Ye shall have eternal life.</p>",
                "<p class='full-text'>As we increase our understanding of the doctrine of Christ, we soon discover that we are developing a deeper understanding of &#x201C;the great plan of happiness.&#x201D; We also recognize that our Savior, Jesus Christ, is at the very heart of the plan</p>",
                "<p class='full-text'>When we learn how to apply the doctrine of Christ to our individual circumstances, our love for our Savior grows. And we recognize &#x201C;that regardless of perceived differences, all of us are in need of the same infinite Atonement.&#x201D;5 We realize that He is our foundation&#x2014;&#x201C;the rock of our Redeemer, &#x2026; a sure foundation &#x2026; whereon if [we] build [we] cannot fall.&#x201D;</p>",
              "<p class='full-text'>When the woman came to the well, Jesus&#x2014;the embodiment of living water&#x2014;said simply, &#x201C;Give me to drink.&#x201D; Our Savior will likewise speak to us in a voice we recognize when we come to Him&#x2014;for He knows us. He meets us where we are. And because of who He is and what He has done for us, He understands. Because He has experienced our pain, He can give us living water when we seek it. He taught this to the Samaritan woman when He said, &#x201C;If thou knewest the gift of God and who it is that saith to thee, Give me to drink; thou wouldest have asked of him, and he would have given thee living water.&#x201D; Finally understanding, the woman responded in faith and asked, &#x201C;Sir, give me this water, that I thirst not.&#x201D;</p>",
                "<p class='full-text'>He continued: &#x201C;Complete healing will come through your faith in Jesus Christ and His power and capacity, through His Atonement, to heal the scars of that which is unjust and undeserved.&#x201D;</p>"
              ],
            "image":"images/caren_sthep.png", 
            "comment": [],
            "vote": "0"
            },{
            "session": "general-women",
            "title": "Rise Up in Strength, Sisters in Zion",
            "snip": "<p class='snip'>What joy it is to be gathered in this Conference Center with the girls, young women, and women of the Church. We are also very aware that there are thousands of other groups of sisters, gathered throughout the world, watching these proceedings, and I&#x2019;m grateful for the opportunity and means that allow us to join together in unity and purpose this evening</p>",
            "fulltext": [
              "<p class='full-text'>What joy it is to be gathered in this Conference Center with the girls, young women, and women of the Church. We are also very aware that there are thousands of other groups of sisters, gathered throughout the world, watching these proceedings, and I&#x2019;m grateful for the opportunity and means that allow us to join together in unity and purpose this evening</p>",
              "<p class='full-text'>In October 2006, President Gordon B. Hinckley gave a talk entitled &#x201C;Rise Up, O Men of God,&#x201D; named after a hymn written in 1911. It was a call to action for the men of the Church to rise up and improve themselves. That talk has echoed in my mind as I have prayed to know what to share with you.</p>",
                "<p class='full-text'>Sisters, we live in &#x201C;perilous times.&#x201D;2 The conditions of our day should not be a surprise to us. They have been foretold for millennia as a warning and admonition so that we can be prepared. The 8th chapter of Mormon gives a disconcertingly accurate description of the conditions of our day. In this chapter, Moroni says he has seen our day, and it includes wars and rumors of wars, great pollutions, murders, robbing, and people who tell us that there is no right or wrong in God&#x2019;s eyes. He describes people who are filled with pride, caught up in the wearing of expensive clothing, and who make fun of religion. He is shown people who are so obsessed with worldly things that they allow &#x201C;the needy, and the naked, and the sick and the afflicted to pass by&#x201D;3 without being noticed.</p>",
              "<p class='full-text'>Moroni asks a soul-searching question of us&#x2014;we who are living in these times. He says, &#x201C;Why are ye ashamed to take upon you the name of Christ?&#x201D;4 This indictment accurately describes the increasingly secular condition of our world.</p>",
              "<p class='full-text'>Joseph Smith—Matthew indicates that in the last days even the “very elect … according to the covenant”5 will be deceived. Those of the covenant include the girls, young women, and sisters of the Church who have been baptized and made covenants with their Heavenly Father. Even we are at risk of being deceived by false teachings.</p>",
              "<p class='full-text'>Sisters, I don&#x2019;t believe that conditions are going to improve going forward. If current trends are an indication, we need to be prepared for the storms that lie ahead. It would be easy to throw our hands up in despair, but as covenant people we need never despair. As Elder Gary E. Stevenson has said, &#x201C;Heavenly Father&#x2019;s generous compensation for living in perilous times is that we also live in the fulness of times.&#x201D;6 I love the comfort of that statement.</p>",
                "<p class='full-text'>President Russell M. Nelson told us a year ago: &#x201C;Attacks against the Church, its doctrine, and our way of life are going to increase. Because of this, we need women who have a bedrock understanding of the doctrine of Christ and who will use that understanding to teach and help raise a sin-resistant generation. We need women who can detect deception in all of its forms. We need women who know how to access the power that God makes available to covenant keepers and who express their beliefs with confidence and charity. We need women who have the courage and vision of our Mother Eve.&#x201D;7</p>",
              "<p class='full-text'>This message reassures me that despite the conditions of our day, we have many reasons to rejoice and be optimistic. I believe with all of my heart that we sisters do have the innate strength and faith that will allow us to meet the challenges of living in the last days. Sister Sheri Dew has written, &#x201C;I believe that the moment we learn to unleash the full influence of converted, covenant-keeping women, the kingdom of God will change overnight.&#x201D;8</p>"

            ],
            "image":"images/bonie_os.png",  
            "comment": [],
            "vote": "0"
            },{
            "session": "general-women",
            "title": "Fourth Floor, Last Door",
            "snip": "<p class='snip'>My dear sisters, dear friends, how blessed we are to assemble again in this worldwide conference under the direction and leadership of our dear prophet and President, Thomas S. Monson. President, we love you and we sustain you! We know you love the sisters of the Church.</p>",
            "fulltext": [
              "<p class='full-text'>My dear sisters, dear friends, how blessed we are to assemble again in this worldwide conference under the direction and leadership of our dear prophet and President, Thomas S. Monson. President, we love you and we sustain you! We know you love the sisters of the Church.</p>",
              "<p class='full-text'>I love attending this wonderful session of general conference devoted to the sisters of the Church.</p>",
                "<p class='full-text'>Sisters, when I see you, I cannot help but think of the women who have been so influential in my life: my grandmother and mother, who were the first to accept the invitation to come and see what the Church is all about.1 There is my beloved wife, Harriet, with whom I fell in love the first time I saw her. There is Harriet&#x26;#x2019;s mother, who joined the Church not long after losing her husband to cancer. Then my sister, my daughter, my granddaughter, and my great-granddaughter&#x26;#x2014;all of these individuals have been refining influences for me. They truly bring sunshine into my life. They inspire me to become a better man and a more sensitive Church leader. How different my life would be without them!</p>",
              "<p class='full-text'>Perhaps what humbles me most is to know that the same influence is replicated millions of times throughout the Church through the abilities, talents, intelligence, and testimony of women of faith like you.</p>"
            ],
            "image":"images/uchtdorf.png",  
            "comment": [],
            "vote": "0"
            },{
            "session": "saturday-morning-session",
            "title": "O How Great the Plan of Our God!",
            "snip": "<p class='snip'>How blessed we are to assemble again in this worldwide conference under the direction and leadership of our dear prophet and President, Thomas S. Monson. President, we love you and we sustain you with all our hearts!</p>",
            "fulltext": [
              "<p class='full-text'>How blessed we are to assemble again in this worldwide conference under the direction and leadership of our dear prophet and President, Thomas S. Monson. President, we love you and we sustain you with all our hearts!</p>",
              "<p class='full-text'>During my professional life as a pilot, I relied greatly on the precision and reliability of computer systems but rarely had to work my own personal computer. In my office work as an executive, I had assistants and secretaries who kindly helped me with the tasks.</p>",
                "<p class='full-text'>All this changed in 1994, when I was called as a General Authority. My calling consisted of many wonderful opportunities to minister, but it also included a great deal of Church office work&#x2014;more than I ever thought possible.</p>",
              "<p class='full-text'>To my shock, the main tool to stay on top of my work was a personal computer.</p>",
              "<p class='full-text'>For the first time in my life, I had to delve into this strange, mystifying, incomprehensible world.</p>",
                "<p class='full-text'>From the start, the computer and I were not on the friendliest of terms.</p>",
              "<p class='full-text'>Able tech people tried to teach me how to use the computer. They literally stood behind me, reaching over my shoulder, their fingers moving quickly and tapping a percussive symphony against the keyboard.</p>"
            ],
            "image":"images/uchtdorf.png",  
            "comment": [],
            "vote": "0"
            },{
            "session": "saturday-morning-session",
            "title": "\"Come, Follow Me\" by Practicing Christian Love and Service",
            "snip": "<p class='snip'>Nobel laureate Elie Wiesel was in the hospital recovering from open-heart surgery when he was visited by his five-year-old grandson. As the little boy looked into his grandfather&#x2019;s eyes, he saw his pain. &#x201C;Grandpa,&#x201D; he asked, &#x201C;if I loved you more, would you [hurt less]?&#x201D;1 Today I ask a similar question of each of us: &#x201C;If we love the Savior more, will we suffer less?&#x201D;</p>",
            "fulltext": [
              "<p class='full-text'>Nobel laureate Elie Wiesel was in the hospital recovering from open-heart surgery when he was visited by his five-year-old grandson. As the little boy looked into his grandfather&#x2019;s eyes, he saw his pain. &#x201C;Grandpa,&#x201D; he asked, &#x201C;if I loved you more, would you [hurt less]?&#x201D;1 Today I ask a similar question of each of us: &#x201C;If we love the Savior more, will we suffer less?&#x201D;</p>",
              "<p class='full-text'>When the Savior called His disciples to follow Him, they were living the law of Moses, including seeking &#x201C;an eye for an eye, and a tooth for a tooth,&#x201D;2 but the Savior came to fulfill that law with His Atonement. He taught a new doctrine: &#x201C;Love your enemies, bless them that curse you, do good to them that hate you, and pray for them which despitefully use you, and persecute you.</p>",
                "<p class='full-text'>The disciples were taught to turn from the ways of the natural man to the loving and caring ways of the Savior by replacing contention with forgiveness, kindness, and compassion. The &#x201C;new commandment&#x201D; to &#x201C;love one another&#x201D;4 was not always easy to keep. When the disciples worried about associating with sinners and certain classes of people, the Savior patiently taught, &#x201C;Inasmuch as ye have done it unto one of the least of these my brethren, ye have done it unto me.&#x201D;5 Or, as a Book of Mormon prophet explained, &#x201C;When ye are in the service of your fellow beings ye are only in the service of your God.&#x201D;</p>",
              "<p class='full-text'>As the Savior&#x2019;s latter-day disciples, we come unto Him by loving and serving God&#x2019;s children. As we do, we may not be able to avoid tribulation, affliction, and suffering in the flesh, but we will suffer less spiritually. Even in our trials we can experience joy and peace.</p>",
              "<p class='full-text'>Our Christian love and service naturally begin in the home. Parents, you are called to be loving teachers and missionaries to your children and youth. They are your investigators. You bear the responsibility to help them become converted. In truth, all of us are seeking to be converted&#x2014;which means being filled with our Savior&#x2019;s love.</p>",
                "<p class='full-text'>As we follow Jesus Christ, His love motivates us to support each other on our mortal journey. We cannot do it alone.7 You have heard me share the Quaker proverb before: Thee lift me, I&#x2019;ll lift thee, and we&#x2019;ll ascend together eternally.8 As disciples, we begin to do this when we are baptized, showing our willingness &#x201C;to bear one another&#x2019;s burdens, that they may be light.&#x201D;</p>",
              "<p class='full-text'>&#x201C;Teach[ing] one another the doctrine of the kingdom&#x201D;10 is a way to love and serve each other. Parents and grandparents, we tend to bemoan the state of the world&#x2014;that schools are not teaching moral character. But there is much we can do. We can take advantage of the teaching moments in our own families&#x2014;that means now. Don&#x2019;t let them slip by. When an opportunity comes to share your thoughts about the gospel and the lessons of life, stop everything, sit down, and talk with your children and grandchildren.</p>"
            ],
            "image":"images/rober_d_hales.png", 
            "comment": [],
            "vote": "0"
            },{
            "session": "saturday-morning-session",
            "title": "The Soul's Sincere Desire",
            "snip": "<p class='snip'>In the struggles of mortality, we are never left alone to accomplish our work, to fight our battles, to face adversity or unanswered questions. Jesus Christ taught with a parable &#x201C;that men ought always to pray, and not to faint.&#x201D; He told of a judge who did not honor God and did not have any regard for mankind. Repeatedly, a widow came before him, pleading to be avenged of her adversary. For a while, the judge would offer her no relief. But as a result of her faithful, consistent pleading, the judge finally thought, &#x201C;Because this widow troubleth me, I will avenge her, lest by her continual coming she weary me.&#x201D;</p>",
            "fulltext": [
              "<p class='full-text'>In the struggles of mortality, we are never left alone to accomplish our work, to fight our battles, to face adversity or unanswered questions. Jesus Christ taught with a parable &#x201C;that men ought always to pray, and not to faint.&#x201D; He told of a judge who did not honor God and did not have any regard for mankind. Repeatedly, a widow came before him, pleading to be avenged of her adversary. For a while, the judge would offer her no relief. But as a result of her faithful, consistent pleading, the judge finally thought, &#x201C;Because this widow troubleth me, I will avenge her, lest by her continual coming she weary me.&#x201D;</p>",
              "<p class='full-text'>Then Jesus explained:</p>",
                "<p class='full-text'>Prayer is essential to developing faith. When the Lord comes again, will He find a people who know how to pray in faith and who are prepared to receive salvation? &#x201C;For whosoever shall call upon the name of the Lord shall be saved.&#x201D;2 We are children of a loving Heavenly Father, and we may enjoy personal communion with Him when we pray &#x201C;with a sincere heart, with real intent, having faith in Christ&#x201D;3 and then act in accordance with the answers we receive by the promptings of the Holy Ghost. In faith we pray, we listen, and we obey, that we might learn to become one with the Father and the Son.4</p>",
              "<p class='full-text'>If we expect to receive, we must ask, seek, and knock. In his search for truth, Joseph Smith read from the scriptures, &#x201C;If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not; and it shall be given him.&#x201D;6 In answer to his prayer of faith, the heavens were opened. God the Father and His Son, Jesus Christ, descended in glory and spoke to Joseph Smith, ushering in the dispensation of the fulness of times. For us, miraculous healing, powerful protection, divine knowledge, liberating forgiveness, and precious peace are among the answers that come when we offer up a &#x201C;soul&#x2019;s sincere desire&#x201D;7 in faith.</p>"
            ],
            "image":"images/carol_f_mc.png",  
            "comment": [],
            "vote": "0"
            },{
            "session": "saturday-morning-session",
            "title": "\"A Choice Seer Will I Raise Up\"",
            "snip": "<p class='snip'>When Moroni first came to Joseph Smith, he warned that Joseph&#x2019;s &#x201C;name should be had for good and evil among all nations.&#x201D;1 We have seen the fulfillment of that prophecy. In the war between good and evil, the Restoration of the gospel through the Prophet Joseph Smith has both inspired believers who follow him and also provoked antagonists who fight furiously against the cause of Zion and against Joseph himself. This battle is not new. It began soon after young Joseph walked into the Sacred Grove and continues today with added visibility on the internet.</p>",
            "fulltext": [
              "<p class='full-text'>The Lord personally declared to Joseph Smith:</p>",
              "<p class='full-text'>&#x201C;The ends of the earth shall inquire after thy name, and fools shall have thee in derision, and hell shall rage against thee;</p>",
                "<p class='full-text'>We need not be timid about testifying of Joseph&#x2019;s mission as prophet, seer, and revelator, for the Lord has always worked through prophets.3 Because of the truths restored through Joseph Smith, we know much more about our Heavenly Father and the Savior Jesus Christ. We know of Their divine attributes, Their relationship to each other and to us, and the great plan of redemption that allows us to return to Their presence.</p>",
              "<p class='full-text'>In preparation for this great work, Joseph Smith was born into a loving family who experienced many of the everyday burdens and trials of life. As Joseph began to mature, his feelings toward God &#x201C;were deep and often poignant,&#x201D;5 yet he was confused by conflicting religious ideas taught by the preachers of his day. Fortunately, young Joseph did not let his questions paralyze his faith. He sought answers in the Bible and found this counsel: &#x201C;If any of you lack wisdom, let him ask of God, that giveth to all men liberally, and upbraideth not; and it shall be given him.&#x201D;6</p>",
              "<p class='full-text'>Joseph recalled: &#x201C;Never did any passage of scripture come with more power to the heart of man than this did at this time to mine. It seemed to enter with great force into every feeling of my heart. I reflected on it again and again.&#x201D;</p>",
                "<p class='full-text'>With simple faith, Joseph acted on these spiritual feelings. He found a secluded place, knelt down, &#x201C;and began to offer up the desires of [his] heart to God.&#x201D;8 There is great power in Joseph&#x2019;s description of what happened:</p>",
              "<p class='full-text'>Joseph Smith saw God, the Eternal Father, and Jesus Christ, the Savior and Redeemer of the world. This was Joseph&#x2019;s First Vision. In the years that followed, Joseph translated the Book of Mormon by the gift and power of God. Numerous other heavenly beings visited him, restoring truths and authority that had been lost for centuries. These divine communications to Joseph Smith opened the windows of heaven and the glories of eternity to our view. Joseph&#x2019;s life stands as a testimony that if any of us lack wisdom, we can ask God in faith and receive answers&#x2014;sometimes from heavenly beings but more often by the power of the Holy Ghost, who speaks to us through inspired thoughts and feelings.10 It is through the Holy Ghost that we can &#x201C;know the truth of all things.&#x201D;11</p>"
            ],
            "image":"images/christensen.png", 
            "comment": [],
            "vote": "0"
            },{
            "session": "saturday-morning-session",
            "title": "The Lord Jesus Christ Teaches Us to Pray",
            "snip": "<p class='snip'>In 1977, I was serving as a full-time missionary in Cusco, Peru. My companion and I received approval to take all the missionaries in the Cusco zone to the magnificent Machu Picchu ruins.</p>",
            "fulltext": [
              "<p class='full-text'>In 1977, I was serving as a full-time missionary in Cusco, Peru. My companion and I received approval to take all the missionaries in the Cusco zone to the magnificent Machu Picchu ruins.</p>",
              "<p class='full-text'>Towards the end of our visit to the ruins, some of the missionaries wanted to go to the Inca Bridge, part of a mountain trail. Immediately, I felt in my heart the Spirit constraining me not to go there. The trail was on the side of a mountain with a 2,000-foot (610 m) drop-off. In several areas the trail was only wide enough for one person to pass at a time. My companion and I told them that we should not go to the Inca Bridge.</p>",
                "<p class='full-text'>However, the missionaries insisted that we go. The pleadings became more intense, and despite what the Spirit had indicated to me, I gave in to the peer pressure and told them that we would visit the bridge but only if we were very careful.</p>",
              "<p class='full-text'>We entered the trail that leads to the Inca Bridge with me at the end of the group, and at first everyone walked slowly, as agreed. Then the missionaries started to walk very fast and even run. They ignored my petitions to slow down. I felt obligated to catch up to them, to tell them that we had to turn back. I was far behind them, and I had to run fast to catch up with them.</p>",
              "<p class='full-text'>As I came around a turn, in a passage too narrow for two to walk, I found a missionary standing still with his back against the rocks. I asked him why he was standing there. He told me he had received an impression to remain in that spot for a moment and that I should go on.</p>",
                "<p class='full-text'>I felt the urgency to catch up to those ahead of us, so he helped me to pass him, and I was able to get a little farther down the trail. I noticed that the ground was full of greenery. I planted my right foot on the ground, realizing, as I fell, that there was no ground underneath the greenery. I desperately grabbed onto some branches that were underneath the trail. For a moment I could see down, some 2,000 feet below me, the Urubamba River, which crosses the Sacred Valley of the Incas. I felt as if my strength had left me, and it was only a matter of time before I could not hold on anymore. In that moment, I prayed intensely. It was a very brief prayer. I opened my mouth and said, &#x201C;Father, help me!&#x201D;</p>",
              "<p class='full-text'>The branches were not strong enough to support the weight of my body. I knew the end was near. In the very moment when I was about to fall, I felt a firm hand take me by the arm and pull me up. With that help I was able to continue fighting and get myself back on the trail. The missionary who had stayed behind was the one who saved me.</p>"
            ],
            "image":"images/juan_uceda.png",  
            "comment": [],
            "vote": "0"
            },{
            "session": "saturday-afternoon-session",
            "title": "Valiant in the Testimony of Jesus",
            "snip": "<p class='snip'>Eternal life is the greatest gift of God and is bestowed on those who &#x201C;keep [God&#x2019;s] commandments and endure to the end.&#x201D;1 On the other hand, eternal life with our Heavenly Father is denied those &#x201C;who are not valiant in the testimony of Jesus.&#x201D;2 There are a number of stumbling blocks to our valor that can prevent us from reaching the goal of eternal life.3 Stumbling blocks can be complex; let me illustrate.</p>",
            "fulltext": [
              "<p class='full-text'>Eternal life is the greatest gift of God and is bestowed on those who &#x201C;keep [God&#x2019;s] commandments and endure to the end.&#x201D;1 On the other hand, eternal life with our Heavenly Father is denied those &#x201C;who are not valiant in the testimony of Jesus.&#x201D;2 There are a number of stumbling blocks to our valor that can prevent us from reaching the goal of eternal life.3 Stumbling blocks can be complex; let me illustrate.</p>",
              "<p class='full-text'>Many years ago my father built a small cabin on part of the ranch property where he had been raised. The vistas across the meadows were exceptional. When the walls were framed in for the cabin, I made a visit. I was surprised that the window with the view focused directly on a power pole that was a short distance from the house. To me, it was a huge distraction from the magnificent view.</p>",
                "<p class='full-text'>My father, an exceptionally practical and calm man, exclaimed with some emotion, &#x201C;Quentin, that power pole is the most beautiful thing to me on the entire ranch!&#x201D; He then made his case: &#x201C;When I look at that pole, I realize that, unlike when I grew up here, I will not have to carry water in containers from the spring up to the house to cook, wash my hands, or bathe. I will not have to light candles or oil lamps at night to read. I want to see that power pole right in the middle of the view window.&#x201D;</p>",
              "<p class='full-text'>My father had a different perspective on the power pole than I did. To him that pole represented an improved life, but to me it was a stumbling block to a magnificent vista. My dad valued power, light, and cleanliness above an aesthetic view. I immediately realized that while the pole was a stumbling block for me, it had great practical, symbolic meaning to my father.</p>",
              "<p class='full-text'>We cannot afford to have our testimonies of the Father and the Son become confused and complicated by stumbling blocks. We cannot fall into that trap. Our testimonies of Them need to remain pure and simple like my father&#x2019;s simple defense of the power pole on the ranch where he grew up.</p>",
                "<p class='full-text'>The Apostle Paul was a sure witness of Jesus Christ because of a miraculous and life-changing experience with the Savior.7 Paul&#x2019;s unique background prepared him to relate to people of many cultures. He loved the &#x201C;frank simplicity&#x201D; of the Thessalonians and the &#x201C;tender sympathy&#x201D; of the Philippians.8 He initially found it more difficult to relate to the intellectual and sophisticated Greeks. In Athens on Mars&#x2019; Hill, he attempted a philosophical approach and was rejected. To the Corinthians he determined to simply teach &#x201C;the doctrine of Christ crucified.&#x201D;9 To use the Apostle Paul&#x2019;s own words:</p>",
              "<p class='full-text'>Some of the most magnificent scriptural accounts of the Savior and His mission are set forth in 1 Corinthians. One chapter&#x2014;15&#x2014;has received worldwide attention through performances of George Frideric Handel&#x2019;s Messiah.11 It contains profound doctrine about the Savior. In the third part of Messiah, immediately following the &#x201C;Hallelujah Chorus,&#x201D; most of the scriptures used are from 1 Corinthians 15. In a few of these verses, Paul beautifully describes some of what the Savior accomplished:</p>"
            ],
            "image":"images/quentin.png", 
            "comment": [],
            "vote": "0"
            },{
            "session": "saturday-afternoon-session",
            "title": "Look to the Book, Look to the Lord",
            "snip": "<p class='snip'>In my mind, I imagine you of the rising generation watching or listening to this conference session somewhere in the world. I&#x2019;d like to share a true story with you, a story that can be both an example and a lesson. It can show you how to get closer to the Lord and access greater power to resist temptation.</p>",
            "fulltext": [
              "<p class='full-text'>In my mind, I imagine you of the rising generation watching or listening to this conference session somewhere in the world. I&#x2019;d like to share a true story with you, a story that can be both an example and a lesson. It can show you how to get closer to the Lord and access greater power to resist temptation.</p>",
              "<p class='full-text'>This is a story of a young girl, living in New York, who before age three lost her father when his boat sank on a large lake. She, her mother, older brother, and younger sister moved to a new city in another state to live with her aunt and uncle. Sometime after the family arrived, missionaries and members of a newly organized religion came to their town with the glorious news of the Restoration of the gospel. They told a remarkable story of an angel delivering an ancient record to a young man named Joseph Smith, a record he had translated by the power of God. Two of the visitors, Oliver Cowdery and John Whitmer, had actually seen the engraved metal pages of the ancient record with their own eyes, and Whitmer witnessed he had held the golden plates in his own hands. This record had been recently published, and Brother Whitmer brought the book with him. The name of the book, of course, was the Book of Mormon.</p>",
                "<p class='full-text'>When 12-year-old Mary heard the missionaries speak about the book, she had a special feeling in her heart. Even though the Book of Mormon was thick with many pages, Mary yearned to read it. When Brother Whitmer departed, he gave one precious copy of the book to Brother Isaac Morley, who was a friend of Mary&#x2019;s uncle and a local leader in the new church.</p>",
              "<p class='full-text'>Mary later recorded: &#x201C;I went to [Brother Morley&#x2019;s] house &#x2026; and asked to see the Book; [he] put it in my hand, [and] as I looked at it, I felt such a desire to read it, that I could not refrain from asking him to let me take it home and read it. &#x2026; He said &#x2026; he had hardly had time to read a chapter in it himself, and but few of the brethren had even seen it, but I plead so earnestly for it, he finally said, &#x2018;child, if you will bring this book home before breakfast tomorrow morning, you may take it.&#x2019;&#x201D;</p>",
              "<p class='full-text'>Mary ran home and was so captured by the book that she stayed up nearly all night reading it. The next morning, when she returned the book, Brother Morley said, &#x201C;I guess you did not read much in it&#x201D; and &#x201C;I don&#x2019;t believe you can tell me one word of it.&#x201D; Mary stood up straight and repeated from memory the first verse of the Book of Mormon. She then told him the story of the prophet Nephi. Mary later wrote, &#x201C;He gazed at me in surprise, and said, &#x2018;child, take this book home and finish it, I can wait.&#x2019;&#x201D;</p>",
                "<p class='full-text'>A short time later, Mary finished reading the book and was the first person in her town to read the entire book. She knew it was true and that it came from Heavenly Father. As she looked to the book, she looked to the Lord.</p>",
              "<p class='full-text'>One month later a special visitor came to her house. Here is what Mary wrote about her memorable encounter that day: &#x201C;When [Joseph Smith] saw me he looked at me so earnestly. &#x2026; After a moment or two he &#x2026; gave me a great blessing &#x2026; and made me a present of the book, and said he would give Brother Morley another [copy]. &#x2026; We all felt that he was a man of God, for he spoke with power, and as one having authority.&#x201D;</p>"
            ],
            "image":"images/gary.png",  
            "comment": [],
            "vote": "0"
            },{
            "session": "saturday-afternoon-session",
            "title": "\"Abide in My Love\"",
            "snip": "<p class='snip'>The Bible tells us that &#x201C;God is love.&#x201D;1 He is the perfect embodiment of love, and we rely heavily on the constancy and universal reach of that love. As President Thomas S. Monson has expressed: &#x201C;God&#x2019;s love is there for you whether or not you feel you deserve love. It is simply always there.&#x201D;2</p>",
            "fulltext": [
              "<p class='full-text'>The Bible tells us that &#x201C;God is love.&#x201D;1 He is the perfect embodiment of love, and we rely heavily on the constancy and universal reach of that love. As President Thomas S. Monson has expressed: &#x201C;God&#x2019;s love is there for you whether or not you feel you deserve love. It is simply always there.&#x201D;2</p>",
              "<p class='full-text'>There are many ways to describe and speak of divine love. One of the terms we hear often today is that God&#x2019;s love is &#x201C;unconditional.&#x201D; While in one sense that is true, the descriptor unconditional appears nowhere in scripture. Rather, His love is described in scripture as &#x201C;great and wonderful love,&#x201D;3 &#x201C;perfect love,&#x201D;4 &#x201C;redeeming love,&#x201D;5 and &#x201C;everlasting love.&#x201D;6 These are better terms because the word unconditional can convey mistaken impressions about divine love, such as, God tolerates and excuses anything we do because His love is unconditional, or God makes no demands upon us because His love is unconditional, or all are saved in the heavenly kingdom of God because His love is unconditional. God&#x2019;s love is infinite and it will endure forever, but what it means for each of us depends on how we respond to His love.</p>",
                "<p class='full-text'>To &#x201C;continue in&#x201D; or &#x201C;abide in&#x201D; the Savior&#x2019;s love means to receive His grace and be perfected by it.8 To receive His grace, we must have faith in Jesus Christ and keep His commandments, including repenting of our sins, being baptized for the remission of sins, receiving the Holy Ghost, and continuing in the path of obedience.</p>",
              "<p class='full-text'>God will always love us, but He cannot save us in our sins.10 Remember the words of Amulek to Zeezrom that the Savior would not save His people in their sins but from their sins,11 the reason being that with sin we are unclean and &#x201C;no unclean thing can inherit the kingdom of heaven&#x201D;12 or dwell in God&#x2019;s presence. &#x201C;And [Christ] hath power given unto him from the Father to redeem [His people] from their sins because of repentance; therefore he hath sent his angels to declare the tidings of the conditions of repentance, which bringeth unto the power of the Redeemer, unto the salvation of their souls.&#x201D;13</p>",
              "<p class='full-text'>&#x201C;And thus mercy can satisfy the demands of justice, and encircles them in the arms of safety, while he that exercises no faith unto repentance is exposed to the whole law of the demands of justice; therefore only unto him that has faith unto repentance is brought about the great and eternal plan of redemption.&#x201D;14</p>",
                "<p class='full-text'>Some will argue that God blesses everyone without distinction&#x2014;citing, for example, Jesus&#x2019;s statement in the Sermon on the Mount: &#x201C;[God] maketh his sun to rise on the evil and on the good, and sendeth rain on the just and on the unjust.&#x201D;15 Indeed, God does rain down upon all His children all the blessings He can&#x2014;all the blessings that love and law and justice and mercy will permit. And He commands us to be likewise generous:</p>",
              "<p class='full-text'>Beyond rendering the penitent person guiltless and spotless with the promise of being &#x201C;lifted up at the last day,&#x201D;18 there is a second vital aspect of abiding in the love of God. Abiding in His love will enable us to realize our full potential, to become even as He is.19 As President Dieter F. Uchtdorf stated: &#x201C;The grace of God does not merely restore us to our previous innocent state. &#x2026; His aim is much higher: He wants His sons and daughters to become like Him.&#x201D;20</p>"
            ],
            "image":"images/tod.png", 
            "comment": [],
            "vote": "0"
            },{
            "session": "saturday-afternoon-session",
            "title": "For Our Spiritual Development and Learning",
            "snip": "<p class='snip'>When I was a young boy, my parents received a gift that became fascinating to my younger brother David and me. The gift was a miniature model of the golden plates the Prophet Joseph Smith received from the angel Moroni. As I recall, the model plates had 10 or so metal pages with words written on them. However, those pages weren&#x2019;t what caught our attention.</p>",
            "fulltext": [
              "<p class='full-text'>When I was a young boy, my parents received a gift that became fascinating to my younger brother David and me. The gift was a miniature model of the golden plates the Prophet Joseph Smith received from the angel Moroni. As I recall, the model plates had 10 or so metal pages with words written on them. However, those pages weren&#x2019;t what caught our attention.</p>",
              "<p class='full-text'>We had been raised hearing the stories of the Restoration. We knew of and had sung in Primary about golden plates hidden deep in a mountainside and delivered by the angel Moroni to Joseph Smith.1 As the curiosity of our young minds stirred, there was one thing we really wanted to see: what was written on the small section of the model plates securely sealed with two small metal bands?</p>",
                "<p class='full-text'>The plates sat on an end table for several days before our curiosity got the best of us. Although we clearly understood that these were not the actual plates Moroni had delivered, we wanted to view the sealed portion. So on several occasions, my brother and I tried using butter knives, old spoons, and anything else we could imagine to pry apart the sealed portion of the plates just enough to see what they contained&#x2014;but not enough to break the small bands. We were at least smart enough not to leave a trace of our mischievous boyhood curiosity. To our disappointment and frustration, these attempts to &#x201C;pry at the plates&#x201D; were always unsuccessful.</p>",
              "<p class='full-text'>I still don&#x2019;t know what&#x2014;if anything&#x2014;was hidden under that sealed portion. But the embarrassing part of our story is that to this day, I have no idea what was written on the portion of the metal pages that was meant to be read. I can only imagine that these pages contained stories of the Restoration and testimonies of Joseph Smith and the Three and Eight Witnesses, who saw the actual plates Moroni delivered.</p>",
              "<p class='full-text'>Since the Creation of this earth, our loving Father in Heaven has provided direction, leadership, and instruction to His children through prophets. His words have been passed down through these prophets and are saved as scripture for our development and learning. Nephi described it this way:</p>",
                "<p class='full-text'>Sadly, our development and learning can at times be slowed or even halted by an ill-conceived desire to &#x201C;pry at the plates.&#x201D; These actions can lead us to seek after things that are not necessarily meant to be understood at this time, all the while ignoring the beautiful truths that are meant for us and our circumstances&#x2014;the truths that Nephi described as written for our learning and profit.</p>",
              "<p class='full-text'>Jacob&#x2019;s words teach us that we cannot successfully &#x201C;pry at the plates&#x201D; or force the mysteries of God to be revealed unto us. Instead, the mysteries of God are unfolded unto us only according to His will and by the power of the Holy Ghost.4</p>"
            ],
            "image":"images/mark.png",  
            "comment": [],
            "vote": "0"
            },{
            "session": "sunday-morning-session",
            "title": "The Perfect Path to Happiness",
            "snip": "<p class='snip'>My beloved brothers and sisters, both here in the Conference Center and throughout the world, how grateful I am for the opportunity to share my thoughts with you this morning.</p>",
            "fulltext": [
              "<p class='full-text'>My beloved brothers and sisters, both here in the Conference Center and throughout the world, how grateful I am for the opportunity to share my thoughts with you this morning.</p>",
              "<p class='full-text'>Fifty-two years ago, in July 1964, I had an assignment in New York City during the time the World&#x2019;s Fair was hosted there. Early one morning I visited the Mormon Pavilion at the fair. I arrived just prior to a showing of the Church&#x2019;s film Man&#x2019;s Search for Happiness, a portrayal of the plan of salvation which has since become a Church classic. I sat next to a young man who was perhaps 35 years of age. We spoke briefly. He was not a member of our Church. Then the lights dimmed, and the show commenced.</p>",
                "<p class='full-text'>We listened to the voice of the narrator as he posed the poignant and universal questions: Where did I come from? Why am I here? Where do I go when I leave this life? All ears strained to hear the answers, and all eyes were fixed on the images portrayed. A description of our premortal life was given, along with an explanation of our purpose on earth. We witnessed a touching depiction of the passing from this life of an elderly grandfather and of his glorious reunion with loved ones who had preceded him to the spirit world.</p>",
              "<p class='full-text'>At the conclusion of this beautiful portrayal of our Heavenly Father&#x2019;s plan for us, the crowd silently filed out, many visibly touched by the message of the film. The young visitor next to me did not arise. I asked if he had enjoyed the presentation. His emphatic response: &#x201C;This is the truth!&#x201D;</p>",
              "<p class='full-text'>Our Father&#x2019;s plan for our happiness and our salvation is shared by our missionaries throughout the world. Not all who hear this divine message accept and embrace it. However, men and women everywhere, just like my young friend at the New York World&#x2019;s Fair, recognize its truths, and they plant their feet on the path that will lead them safely home. Their lives are forever changed.</p>",
                "<p class='full-text'>Essential to the plan is our Savior, Jesus Christ. Without His atoning sacrifice, all would be lost. It is not enough, however, merely to believe in Him and His mission. We need to work and learn, search and pray, repent and improve. We need to know God&#x2019;s laws and live them. We need to receive His saving ordinances. Only by so doing will we obtain true, eternal happiness.</p>",
              "<p class='full-text'>We are blessed to have the truth. We have a mandate to share the truth. Let us live the truth, that we might merit all that the Father has for us. He does nothing save it be for our benefit. He has told us, &#x201C;This is my work and my glory&#x2014;to bring to pass the immortality and eternal life of man.&#x201D;1</p>"
            ],
            "image":"images/monson.png",  
            "comment": [],
            "vote": "0"
            },{
            "session": "sunday-morning-session",
            "title": "Joy and Spiritual Survival",
            "snip": "<p class='snip'>My dear brothers and sisters, today I would like to discuss a principle that is key to our spiritual survival. It is a principle that will only become more important as the tragedies and travesties around us increase.</p>",
            "fulltext": [
              "<p class='full-text'>My dear brothers and sisters, today I would like to discuss a principle that is key to our spiritual survival. It is a principle that will only become more important as the tragedies and travesties around us increase.</p>",
              "<p class='full-text'>These are the latter days, so none of us should be surprised when we see prophecy fulfilled. A host of prophets, including Isaiah, Paul, Nephi, and Mormon, foresaw that perilous times would come,1 that in our day the whole world would be in commotion,2 that men would &#x201C;be lovers of their own selves, &#x2026; without natural affection, &#x2026; lovers of pleasures more than lovers of God,&#x201D;3 and that many would become servants of Satan who uphold the adversary&#x2019;s work.4 Indeed, you and I &#x201C;wrestle &#x2026; against the rulers of the darkness of this world, [and] against spiritual wickedness in high places.&#x201D;5</p>",
                "<p class='full-text'>As conflicts between nations escalate, as cowardly terrorists prey on the innocent, and as corruption in everything from business to government becomes increasingly commonplace, what can help us? What can help each of us with our personal struggles and with the rigorous challenge of living in these latter days?</p>",
              "<p class='full-text'>The prophet Lehi taught a principle for spiritual survival. First, consider his circumstances: He had been persecuted for preaching truth in Jerusalem and had been commanded by the Lord to leave his possessions and flee with his family into the wilderness. He had lived in a tent and survived on what food could be found on the way to an unknown destination, and he had watched two of his sons, Laman and Lemuel, rebel against the teachings of the Lord and attack their brothers Nephi and Sam.</p>",
              "<p class='full-text'>Clearly, Lehi knew opposition, anxiety, heartache, pain, disappointment, and sorrow. Yet he declared boldly and without reservation a principle as revealed by the Lord: &#x201C;Men are, that they might have joy.&#x201D;6 Imagine! Of all the words he could have used to describe the nature and purpose of our lives here in mortality, he chose the word joy!</p>",
                "<p class='full-text'>Life is filled with detours and dead ends, trials and challenges of every kind. Each of us has likely had times when distress, anguish, and despair almost consumed us. Yet we are here to have joy?</p>",
              "<p class='full-text'>Eliza R. Snow, second General President of the Relief Society, offered a riveting answer. Because of Missouri&#x2019;s infamous extermination order, issued at the onset of the grueling winter of 1838,7 she and other Saints were forced to flee the state that very winter. One evening, Eliza&#x2019;s family spent the night in a small log cabin used by refugee Saints. Much of the chinking between the logs had been extracted and burned for firewood by those who preceded them, so there were holes between the logs large enough for a cat to crawl through. It was bitter cold, and their food was frozen solid.</p>"
            ],
            "image":"images/russell.png", 
            "comment": [],
            "vote": "0"
            },{
            "session": "sunday-morning-session",
            "title": "The Sacrament Can Help Us Become Holy",
            "snip": "<p class='snip'>One of my earliest memories is of sacrament meetings held in our home in Warrnambool, Australia. Between 10 and 15 people attended our branch, and my father, one of three priesthood holders, regularly had the opportunity to bless the sacrament. I remember the feelings I had as he humbly and carefully read the words of the sacrament prayers. Often his voice trembled as he felt the Spirit. He sometimes had to pause to control his emotions before completing the prayer.</p>",
            "fulltext": [
              "<p class='full-text'>One of my earliest memories is of sacrament meetings held in our home in Warrnambool, Australia. Between 10 and 15 people attended our branch, and my father, one of three priesthood holders, regularly had the opportunity to bless the sacrament. I remember the feelings I had as he humbly and carefully read the words of the sacrament prayers. Often his voice trembled as he felt the Spirit. He sometimes had to pause to control his emotions before completing the prayer.</p>",
              "<p class='full-text'>As a five-year-old, I could not understand the full meaning of what was being said or done; however, I knew something special was occurring. I could feel the calm and reassuring influence of the Holy Ghost as my father contemplated the Savior&#x2019;s love for us.</p>",
                "<p class='full-text'>I invite all of us to consider five ways to increase the impact and power of our regular participation in the sacred ordinance of the sacrament, an ordinance that can help us become holy.</p>",
              "<p class='full-text'>Mortality is an essential gift in our journey to become like our Heavenly Father. Of necessity, it includes trials and challenges that provide opportunities for us to change and grow. King Benjamin taught that &#x201C;the natural man is an enemy to God, &#x2026; and will be, forever and ever, unless he yields to the enticings of the Holy Spirit, and putteth off the natural man and becometh a saint through the atonement of Christ the Lord&#x201D; (Mosiah 3:19). Participation in the sacrament ordinance provides an opportunity to more fully yield our hearts and souls to God.</p>",
              "<p class='full-text'>In our preparation, our hearts become broken as we express gratitude for Christ&#x2019;s Atonement, repent of our mistakes and shortcomings, and ask for the Father&#x2019;s help in our continuing journey to become more like Him. We can then look forward to the opportunity the sacrament provides to remember His sacrifice and renew our commitments to all the covenants we have made.</p>",
                "<p class='full-text'>Our sacrament experience can be enhanced when we arrive well before the meeting and ponder as the prelude music is played.</p>",
              "<p class='full-text'>President Boyd K. Packer taught: &#x201C;Prelude music, reverently played, is nourishment for the spirit. It invites inspiration.&#x201D;1 &#x201C;This is not a time,&#x201D; President Russell M. Nelson explained, &#x201C;for conversation or transmission of messages but a period of prayerful meditation as leaders and members prepare spiritually for the sacrament.&#x201D;2</p>"
            ],
            "image":"images/glesses.png", 
            "comment": [],
            "vote": "0"
            },{
            "session": "sunday-morning-session",
            "title": "The Great Plan of Redemption",
            "snip": "<p class='snip'>A few months before President Boyd K. Packer passed away, general priesthood and auxiliary leaders had the precious opportunity of having him speak to us. I have not been able to quit thinking about what he said. He shared that he had searched backward throughout his lifetime, looking for evidence of the sins that he had committed and sincerely repented of, and he could find no trace of them. Because of the atoning sacrifice of our beloved Savior, Jesus Christ, and through sincere repentance, his sins were completely gone, as if they had never happened. President Packer then charged us as leaders that day to testify that this is true for each one of us who sincerely repents.</p>",
            "fulltext": [
              "<p class='full-text'>A few months before President Boyd K. Packer passed away, general priesthood and auxiliary leaders had the precious opportunity of having him speak to us. I have not been able to quit thinking about what he said. He shared that he had searched backward throughout his lifetime, looking for evidence of the sins that he had committed and sincerely repented of, and he could find no trace of them. Because of the atoning sacrifice of our beloved Savior, Jesus Christ, and through sincere repentance, his sins were completely gone, as if they had never happened. President Packer then charged us as leaders that day to testify that this is true for each one of us who sincerely repents.</p>",
              "<p class='full-text'>I&#x2019;m aware of a man who was involved in moral transgressions several years ago. For some time, this man felt too ashamed and too worried to approach his wife and his priesthood leaders. He wanted to fully repent but actually expressed that he was willing to give up his own eternal salvation rather than put his spouse and children through the sorrow, shame, or other consequences that might be caused by his confession.</p>",
                "<p class='full-text'>When we have sinned, Satan often tries to convince us that the unselfish thing to do is to protect others from the devastation of the knowledge of our sins, including avoiding confessing to our bishop, who can bless our lives through his priesthood keys as a common judge in Israel. The truth, however, is that the unselfish and Christlike thing to do is to confess and repent. This is Heavenly Father&#x2019;s great plan of redemption.</p>",
              "<p class='full-text'>Finally, this dear man confessed to his faithful wife and his Church leaders, expressing deep remorse. Though it was the most difficult thing he had ever done, feelings of relief, peace, gratitude, love for our Savior, and a knowledge that the Lord was lifting his heavy burden and carrying him caused joy beyond expression, regardless of the outcome and his future.</p>",
              "<p class='full-text'>Sometimes serious transgression leads to divorce, and depending on circumstances, that might be necessary. But to this man&#x2019;s amazement, his wife embraced him and dedicated herself to helping him in any way that she could. Over time, she was able to fully forgive him. She had felt the healing power of the Savior&#x2019;s Atonement for her. Years later, this couple and their three children are strong and faithful. The husband and wife serve in the temple and have a wonderful, loving marriage. The depth of this man&#x2019;s testimony and his love and gratitude for the Savior are so evident in his life.</p>",
                "<p class='full-text'>When I served with my husband as he presided over a mission, we went to the airport to pick up a large group of missionaries one morning. One particular young man caught our eye. He seemed sad, weighed down, almost distraught. We watched him carefully that afternoon. By evening, this young man made a belated confession, and his leaders determined that he needed to return home. Although we were very sad that he had been dishonest and had not repented before coming on his mission, on the way to the airport we sincerely and lovingly praised him for having the courage to come forward, and we pledged to stay in close contact with him.</p>",
              "<p class='full-text'>This great young man was blessed to have wonderful parents, great priesthood leaders, and a supportive, loving ward. After a year of working hard to fully repent and partake of the Savior&#x2019;s Atonement, he was able to return to our mission. It is difficult for me to describe the feelings of joy we felt as we picked up this young man from the airport. He was full of the Spirit, happy, confident before the Lord, and anxious to fulfill a faithful mission. He became an outstanding missionary, and later my husband and I had the privilege of attending his temple sealing.</p>"
            ],
            "image":"images/linda.png", 
            "comment": [],
            "vote": "0"
            },{
            "session": "sunday-afternoon-session",
            "title": "\"If Ye Had Known Me\"",
            "snip": "<p class='snip'></p>",
            "fulltext": [
              "<p class='full-text'>As the Savior concluded the Sermon on the Mount, He emphasized the eternal truth that &#x201C;only by doing the will of the Father is the saving grace of the Son obtainable.&#x201D;</p>",
              "<p class='full-text'>He declared: &#x201C;Not every one that saith unto me, Lord, Lord, shall enter into the kingdom of heaven; but he that doeth the will of my Father which is in heaven.</p>",
                "<p class='full-text'>&#x201C;Many will say to me in that day, Lord, Lord, have we not prophesied in thy name? and in thy name have cast out devils? and in thy name done many wonderful works?&#x201C;And then will I profess unto them, I never knew you: depart from me, ye that work iniquity.&#x201D;2</p>",
              "<p class='full-text'>Our understanding of this episode is enlarged as we reflect upon an inspired revision to the text. Significantly, the Lord&#x2019;s phrase reported in the King James Version of the Bible, &#x201C;I never knew you,&#x201D; was changed in the Joseph Smith Translation to &#x201C;Ye never knew me.&#x201D;3</p>",
              "<p class='full-text'>Consider also the parable of the ten virgins. Recall that the five foolish and unprepared virgins went to obtain oil for their lamps after hearing the cry to go and meet the bridegroom.</p>",
                "<p class='full-text'>The implications of this parable for each of us are expanded by another inspired revision. Importantly, the phrase &#x201C;I know you not,&#x201D; as reported in the King James Version of the Bible, was clarified in the Joseph Smith Translation to &#x201C;Ye know me not.&#x201D;5</p>",
              "<p class='full-text'>The phrases &#x201C;Ye never knew me&#x201D; and &#x201C;Ye know me not&#x201D; should be a cause of deep spiritual introspection for each of us. Do we only know about the Savior, or are we increasingly coming to know Him? How do we come to know the Lord? These questions of the soul are the focus of my message. I earnestly invite the assistance of the Holy Ghost as we consider together this vital subject.</p>"
            ],
            "image":"images/bednard.png", 
            "comment": [],
            "vote": "0"
            },{
            "session": "sunday-afternoon-session",
            "title": "The Doctrine of Christ",
            "snip": "<p class='snip'>Jesus&#x2019;s visit to the Nephites after His Resurrection was carefully organized to teach us the things of greatest importance. It began with the Father testifying to the people that Jesus was His &#x201C;Beloved Son, in whom [He was] well pleased.&#x201D;1 Then Jesus Himself descended and testified of His atoning sacrifice,2 inviting the people to &#x201C;know of a surety&#x201D; that He was the Christ by coming forth and feeling the wound mark in His side and the prints of the nails in His hands and feet.3 These testimonies established without doubt that Jesus&#x2019;s Atonement was complete and that the Father had fulfilled His covenant to provide a Savior. Jesus then taught the Nephites how to obtain all the blessings of the Father&#x2019;s plan of happiness, which are made available to us because of the Savior&#x2019;s Atonement, by teaching them the doctrine of Christ.4</p>",
            "fulltext": [
              "<p class='full-text'>Jesus&#x2019;s visit to the Nephites after His Resurrection was carefully organized to teach us the things of greatest importance. It began with the Father testifying to the people that Jesus was His &#x201C;Beloved Son, in whom [He was] well pleased.&#x201D;1 Then Jesus Himself descended and testified of His atoning sacrifice,2 inviting the people to &#x201C;know of a surety&#x201D; that He was the Christ by coming forth and feeling the wound mark in His side and the prints of the nails in His hands and feet.3 These testimonies established without doubt that Jesus&#x2019;s Atonement was complete and that the Father had fulfilled His covenant to provide a Savior. Jesus then taught the Nephites how to obtain all the blessings of the Father&#x2019;s plan of happiness, which are made available to us because of the Savior&#x2019;s Atonement, by teaching them the doctrine of Christ.4</p>",
              "<p class='full-text'>My message today focuses on the doctrine of Christ. The scriptures define the doctrine of Christ as exercising faith in Jesus Christ and His Atonement, repenting, being baptized, receiving the gift of the Holy Ghost, and enduring to the end.5</p>",
                "<p class='full-text'>The Atonement of Christ creates the conditions upon which we may rely upon &#x201C;the merits, and mercy, and grace of the Holy Messiah,&#x201D;6 &#x201C;be perfected in [Christ],&#x201D;7 obtain every good thing,8 and gain eternal life.9</p>",
              "<p class='full-text'>The doctrine of Christ on the other hand is the means&#x2014;the only means&#x2014;by which we can obtain all of the blessings made available to us through Jesus&#x2019;s Atonement. It is the doctrine of Christ that allows us to access the spiritual power that will lift us from our current spiritual state to a state where we can become perfected like the Savior.10 Of this process of rebirth, Elder D. Todd Christofferson has taught: &#x201C;Being born again, unlike our physical birth, is more a process than an event. And engaging in that process is the central purpose of mortality.&#x201D;11</p>",
              "<p class='full-text'>Upon hearing the words of Christ, we exercise faith by choosing to follow the teachings and example of the Savior.14 To do this, Nephi taught that we must rely &#x201C;wholly upon the merits of [Christ,] who is mighty to save.&#x201D;15 Because Jesus was a God in the premortal existence,16 lived a sinless life,17 and during His Atonement satisfied all the demands of justice for you and me,18 He has the power and keys to bring about the resurrection of all men,19 and He made it possible for mercy to overpower justice upon conditions of repentance.20 Once we understand that we can obtain mercy through Christ&#x2019;s merits, we are able to &#x201C;have faith unto repentance.&#x201D;21 To rely wholly upon Christ&#x2019;s merits then is to trust that He did what was necessary to save us and then to act upon our belief.22</p>",
                "<p class='full-text'>Through repentance we become submissive and obedient to God&#x2019;s will. Now, this is not done alone. A recognition of God&#x2019;s goodness and our nothingness,30 combined with our best efforts to align our behavior with God&#x2019;s will,31 brings grace into our lives.32 Grace &#x201C;is divine means of help or strength, given through the bounteous mercy and love of Jesus Christ &#x2026; to do good works that [we] otherwise would not be able to maintain if left to [our] own means.&#x201D;33 Because repentance is really about becoming like the Savior, which is impossible on our own, we desperately need the Savior&#x2019;s grace in order to make necessary changes in our lives.</p>",
              "<p class='full-text'>As we repent, we replace our old, unrighteous behaviors, weaknesses, imperfections, and fears with new behaviors and beliefs that draw us closer to the Savior and help us to become like Him.</p>"
            ],
            "image":"images/brian.png", 
            "comment": [],
            "vote": "0"
            }

          ]
        };

        // get the talks as a synchronized array
        var talks = $firebaseObject(ref);
        talks.$loaded().then(function() {
            // talks have been loaded
          talks.talks = talksJSON.talks;
          talks.$save();
        });
    };
}]);

app.controller('PostCtrl', ['$scope', '$stateParams', '$sce', '$firebaseObject', function($scope, $stateParams, $sce, $firebaseObject) {
    var ref = new Firebase("https://creative3-2ce63.firebaseio.com/talks/" + $stateParams.id);
    $scope.talk = $firebaseObject(ref);
    $scope.talk.$loaded().then(function() {
        console.log($scope.talk);
        $scope.text = '';
        for (var i = 0; i < $scope.talk.fulltext.length; i++) {
            $scope.text += $scope.talk.fulltext[i];
        }
    });

    $scope.trustHTML = function(html) {
        var trusted = $sce.trustAsHtml(html);
        return trusted;
    }
    $scope.addComment = function() {
        
    };
    $scope.incrementUpvotes = function(comment) {
        
    };
}]);