document.addEventListener("DOMContentLoaded", function () {

    const goalOptions = document.querySelectorAll(".finder-option");
    const modeOptions = document.querySelectorAll(".finder-mode");

    const resultTitle = document.getElementById("finder-result-title");
    const resultDescription = document.getElementById("finder-result-description");
    const whatsappButton = document.getElementById("finder-whatsapp");

    let selectedGoal = "";
    let selectedMode = "";

    const recommendations = {
        "Yoga & Flexibility": {
            "At Centre": {
                title: "Yoga Classes",
                description:
                    "A guided in-person yoga program focused on flexibility, posture, balance and mindful movement."
            },
            "Online": {
                title: "Online Yoga Classes",
                description:
                    "Live online yoga sessions with guided instruction, making it easy to practise from home."
            }
        },

        "Weight Management": {
            "At Centre": {
                title: "Aerobics + Women's Fitness",
                description:
                    "A combination of energetic cardio and structured fitness sessions to help you build an active and consistent routine."
            },
            "Online": {
                title: "One-to-One Online Training",
                description:
                    "Personalized online coaching with guidance tailored around your fitness and weight-management goals."
            }
        },

        "Strength & Fitness": {
            "At Centre": {
                title: "Ladies Gym + Women's Fitness",
                description:
                    "A women-focused fitness approach combining strength training, regular exercise and overall conditioning."
            },
            "Online": {
                title: "One-to-One Online Training",
                description:
                    "Personalized online guidance to help you build a structured fitness routine from home."
            }
        },

        "Wellness & Stress Relief": {
            "At Centre": {
                title: "Yoga Classes + Women's Fitness",
                description:
                    "A balanced approach combining mindful yoga with gentle fitness to support movement, relaxation and healthy living."
            },
            "Online": {
                title: "Online Yoga + One-to-One Guidance",
                description:
                    "Personalized online sessions combining yoga, mindful movement and individual guidance from home."
            }
        }
    };

    function updateRecommendation() {

        if (!selectedGoal || !selectedMode) {

            resultTitle.textContent = "Choose your goal above";

            resultDescription.textContent =
                "Select your goal and preferred learning mode to get a personalized recommendation.";

            whatsappButton.textContent =
                "Ask About This Class →";

            whatsappButton.href = "#";

            return;
        }

        const recommendation =
            recommendations[selectedGoal]?.[selectedMode];

        if (!recommendation) {
            return;
        }

        resultTitle.textContent = recommendation.title;
        resultDescription.textContent = recommendation.description;

        const message =
            "Hello Seema Ma'am, I visited your website and used the Class Finder. " +
            "My goal is " + selectedGoal +
            " and I would prefer " + selectedMode + ". " +
            "The recommended option was " + recommendation.title + ". " +
            "I would like to know the timings, fees and details.";

        const whatsappURL =
            "https://wa.me/918865849932?text=" +
            encodeURIComponent(message);

        whatsappButton.href = whatsappURL;
        whatsappButton.textContent = "Ask About This Program →";
    }

    function handleSelection(options, selectedOption, type) {

        options.forEach(function (option) {
            option.classList.remove("selected");
        });

        selectedOption.classList.add("selected");

        if (type === "goal") {
            selectedGoal = selectedOption.dataset.goal;
        } else {
            selectedMode = selectedOption.dataset.mode;
        }

        updateRecommendation();
    }

    goalOptions.forEach(function (option) {

        option.addEventListener("click", function () {
            handleSelection(goalOptions, option, "goal");
        });

    });

    modeOptions.forEach(function (option) {

        option.addEventListener("click", function () {
            handleSelection(modeOptions, option, "mode");
        });

    });

});