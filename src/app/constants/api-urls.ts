class APIURL {

    BASEURL = "http://localhost:5000/api/v1/"

    GETMEMBER = this.BASEURL + "member"

    CARDSCRUD = this.BASEURL + "card"

    LOGOUT = this.BASEURL + "authenticate/logout"

    AUTHENTICATE = this.BASEURL+ "authenticate"
}

export default new APIURL() 