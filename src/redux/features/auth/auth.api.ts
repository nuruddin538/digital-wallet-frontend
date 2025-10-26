import { baseApi } from "@/redux/baseApi";
import type { ILogin, IResponse, ISendOtp, IUser, IVerifyOtp } from "@/types";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<IResponse<{ user: IUser; token: string }>, ILogin>({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        data: userInfo,
      }),
    }),
    register: builder.mutation({
      query: (userInfo) => ({
        url: "/user/register",
        method: "POST",
        data: userInfo,
      }),
    }),
    sendOtp: builder.mutation<IResponse<null>, ISendOtp>({
      query: (userInfo) => ({
        url: "/otp/send",
        method: "POST",
        data: userInfo,
      }),
    }),
    verifyOtp: builder.mutation<IResponse<null>, IVerifyOtp>({
      query: (userInfo) => ({
        url: "/otp/verify",
        method: "POST",
        data: userInfo,
      }),
    }),
    // getProfile: builder.query<IResponse<IUser>, void>({
    //   query: () => "/auth/profile",
    //   // providesTags: ["User"],
    // }),
    updateProfile: builder.mutation<IResponse<IUser>, Partial<IUser>>({
      query: (userInfo) => ({
        url: "/auth/profile",
        method: "PUT",
        data: userInfo,
      }),
      // invalidatesTags: ['User']
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useSendOtpMutation,
  useVerifyOtpMutation,
  useUpdateProfileMutation,
} = authApi;
