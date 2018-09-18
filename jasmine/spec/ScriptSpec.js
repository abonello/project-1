describe("Script Test Suite", function() {

// validateName
    describe("validateName", function() {

        // Return True
        it("should return True if name (Only letters) is given.", function() {
            response = validateName("AName");
            expect(response).toBeTruthy();
        });
        it("should return True if name (only lower letters) is given.", function() {
            response = validateName("myname");
            expect(response).toBeTruthy();
        });
        it("should return True if name (All CAPS letters) is given.", function() {
            response = validateName("CAPSNAME");
            expect(response).toBeTruthy();
        });
        it("should return True if name has a space.", function() {
            response = validateName("A Name");
            expect(response).toBeTruthy();
        });
        it("should return True if name has many spaces.", function() {
            response = validateName("My Name is me");
            expect(response).toBeTruthy();
        });
        // Return False
        it("should return False if no name is given.", function() {
            response = validateName("");
            expect(response).toBeFalsy();
        });
        it("should return False if name is all spaces.", function() {
            response = validateName("      ");
            expect(response).toBeFalsy();
        });
        it("should return False if name is a number.", function() {
            response = validateName("6");
            expect(response).toBeFalsy();
        });
        it("should return False if name contains numbers.", function() {
            response = validateName("AName67");
            expect(response).toBeFalsy();
        });
        it("should return False if name contains numbers.", function() {
            response = validateName("This i6 me ");
            expect(response).toBeFalsy();
        });

        it("should return False if name uses special characters.", function() {
            response = validateName("A Name *");
            expect(response).toBeFalsy();
        });
        it("should return False if name uses special characters.", function() {
            response = validateName("My ,name");
            expect(response).toBeFalsy();
        });
    });


// validateEmail
    describe("validateEmail", function() {
        // Return True
        it("should return True if a simple valid email format is given.", function() {
            response = validateEmail("email@somewhere.com");
            expect(response).toBeTruthy();
        });
        it("should return True if a complex valid email format is given.", function() {
            response = validateEmail("my_email@somewhere_over_the_rainbow.com");
            expect(response).toBeTruthy();
        });
        it("should return True if email address contains numbers.", function() {
            response = validateEmail("my_email78@somewhere_0ver_7he_rainbow.com");
            expect(response).toBeTruthy();
        });
        it("should return True if email address contains dashes.", function() {
            response = validateEmail("my-email78@somewhere_0ver-7he-rainbow.com");
            expect(response).toBeTruthy();
        });

        // Return False
        it("should return False if no email is given.", function() {
            response = validateEmail("");
            expect(response).toBeFalsy();
        });
        it("should return False if the top level domain is missing.", function() {
            response = validateEmail("myEmail@somewhere");
            expect(response).toBeFalsy();
        });
        it("should return False if the top level domain is one character long.", function() {
            response = validateEmail("myEmail@somewhere.c");
            expect(response).toBeFalsy();
        });
        it("should return False if the top level domain is more than 4 character long.", function() {
            response = validateEmail("myEmail@somewhere.comic");
            expect(response).toBeFalsy();
        });
        it("should return False if email address contains plus signs.", function() {
            response = validateEmail("my+email78@somewhere_0ver-7he-rainbow.com");
            expect(response).toBeFalsy();
        });

        it("should return False if only first part of email is given.", function() {
            response = validateEmail("myEmail");
            expect(response).toBeFalsy();
        });
        it("should return False if the part after the AT sign is missing completely.", function() {
            response = validateEmail("myEmail@");
            expect(response).toBeFalsy();
        });
        it("should return False if the first part of the email contains spaces.", function() {
            response = validateEmail("my Email@example.com");
            expect(response).toBeFalsy();
        });
        it("should return False if the domain part of the email contains spaces.", function() {
            response = validateEmail("myEmail@new example.com");
            expect(response).toBeFalsy();
        });
        it("should return False if the top level domain part of the email contains spaces.", function() {
            response = validateEmail("myEmail@new_example.c om");
            expect(response).toBeFalsy();
        });

        // Currently does not capture double dots
    });

// validateSubject
    describe("validateSubject", function() { 
        
        // Return True
        it("should return True if subject is given as expected.", function() {
            response = validateSubject("This is a subject");
            expect(response).toBeTruthy();
        });
        it("should return True if subject contains numbers.", function() {
            response = validateSubject("This is my 6th subject");
            expect(response).toBeTruthy();
        });
        it("should return True if subject is all lower case.", function() {
            response = validateSubject("subject in lower case");
            expect(response).toBeTruthy();
        });
        it("should return True if subject is all upper case.", function() {
            response = validateSubject("SUBJECT IN UPPER CASE");
            expect(response).toBeTruthy();
        });



        // Return False
        it("should return False if no subject is given.", function() {
            response = validateSubject("");
            expect(response).toBeFalsy();
        });
        it("should return False if subject is all spaces.", function() {
            response = validateSubject("       ");
            expect(response).toBeFalsy();
        });
        // it("should return False if subject contains special characters")
        it("should return False if subject contains a dot", function() {
            response = validateSubject("subject . should fail");
            expect(response).toBeFalsy();
        });
        it("should return False if subject contains a dash", function() {
            response = validateSubject("subject - should fail");
            expect(response).toBeFalsy();
        });
        it("should return False if subject contains a *", function() {
            response = validateSubject("subject * should fail");
            expect(response).toBeFalsy();
        });
        it("should return False if subject contains a forwardslash", function() {
            response = validateSubject("subject / should fail");
            expect(response).toBeFalsy();
        });
        // it("should return False if subject contains a backslash ", function() {
        //     response = validateSubject("subject \ should fail");
        //     expect(response).toBeFalsy();
        // });
        it("should return False if subject contains a plus sign", function() {
            response = validateSubject("subject + should fail");
            expect(response).toBeFalsy();
        });
        it("should return False if subject contains a $ sign", function() {
            response = validateSubject("subject $ should fail");
            expect(response).toBeFalsy();
        });
        it("should return False if subject contains a % sign", function() {
            response = validateSubject("subject % should fail");
            expect(response).toBeFalsy();
        });
        it("should return False if subject contains a ^ sign", function() {
            response = validateSubject("subject ^ should fail");
            expect(response).toBeFalsy();
        });
        it("should return False if subject contains a , sign", function() {
            response = validateSubject("subject , should fail");
            expect(response).toBeFalsy();
        });
        it("should return False if subject contains a : sign", function() {
            response = validateSubject("subject : should fail");
            expect(response).toBeFalsy();
        });
        it("should return False if subject contains a > sign", function() {
            response = validateSubject("subject > should fail");
            expect(response).toBeFalsy();
        });
        it("should return False if subject contains a < sign", function() {
            response = validateSubject("subject < should fail");
            expect(response).toBeFalsy();
        });
    });


// validateSubject
    describe("validateMessage", function() { 

        // Return False
        it("should return False if no message is given.", function() {
            response = validateMessage("");
            expect(response).toBeFalsy();
        });
        it("should return False if message is all spaces.", function() {
            response = validateMessage("       ");
            expect(response).toBeFalsy();
        });
    });
});
