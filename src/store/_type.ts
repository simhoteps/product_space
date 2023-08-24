
export interface UserAddressModel {
    addressLine: string
    city: string
    state: string
    postCode: string
  }
  
  export interface UserCommunicationModel {
    email: boolean
    sms: boolean
    phone: boolean
  }
  
  export interface UserEmailSettingsModel {
    emailNotification?: boolean
    sendCopyToPersonalEmail?: boolean
    activityRelatesEmail?: {
      youHaveNewNotifications?: boolean
      youAreSentADirectMessage?: boolean
      someoneAddsYouAsAsAConnection?: boolean
      uponNewOrder?: boolean
      newMembershipApproval?: boolean
      memberRegistration?: boolean
    }
    updatesFromKeenthemes?: {
      newsAboutKeenthemesProductsAndFeatureUpdates?: boolean
      tipsOnGettingMoreOutOfKeen?: boolean
      thingsYouMissedSindeYouLastLoggedIntoKeen?: boolean
      newsAboutStartOnPartnerProductsAndOtherServices?: boolean
      tipsOnStartBusinessProducts?: boolean
    }
  }

  export interface UserSocialNetworksModel {
    linkedIn: string
    facebook: string
    twitter: string
    instagram: string
  }


export interface UserModel {
    id?: number
    username?: string
    password?: string | undefined
    email: string
    first_name?: string
    last_name?: string
    fullname?: string
    occupation?: string
    companyName?: string
    phone?: string
    roles?: Array<number>
    pic?: string
    language?: 'en' | 'de' | 'es' | 'fr' | 'ja' | 'zh' | 'ru'
    timeZone?: string
    website?: 'https://keenthemes.com'
    emailSettings?: UserEmailSettingsModel
    auth?: AuthModel
    communication?: UserCommunicationModel
    address?: UserAddressModel
    socialNetworks?: UserSocialNetworksModel
    last_login?: Date;
    is_superuser?: boolean;
    is_staff?: boolean;
    is_active?: boolean;
    date_joined?: Date;
  
  }

export interface ICurrentUserModel {
    id: number;
    access: string;
    user: string;
    refresh:string,
    password?:[],
    username?:[],
  
  }


export interface IFetch { 
    url: string;
    headers?: any;
    body?: any;
    redirect?: any;
    method: string;
    }
    

    export interface AuthModel {
        api_token: string
        refreshToken?: string
      }
      
export interface VerifcationModel {
    loading:boolean,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
    secondVerify:boolean,
    setSecondVerify: React.Dispatch<React.SetStateAction<boolean>>
    setStatus: (status?: any) => void;
    setSubmitting: (isSubmitting: boolean) => void;
    email: string;
    password: string;
  }


  export interface IHealthCheckData {
    tennant_id: number;
    update_time: Date;
    proxy_ip: string;
    customer: string;
    status: string;
  }
  