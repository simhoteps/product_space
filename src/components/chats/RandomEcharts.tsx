import React, { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import ReactEcharts from "echarts-for-react";
import axios from "axios";

interface Igraph {
  nodes: {
    name: string;
    category: number;
    value: number;
    id: number;
  }[];
  links: { source: number; target: number }[];
  categories: { name: string; keyword: {}; base: string }[];
}

const ROOT_PATH = "https://echarts.apache.org/examples";

const webkitDep: Igraph = {
  links: [
    {
      source: 0,
      target: 1,
    },
    {
      source: 0,
      target: 2,
    },
    {
      source: 0,
      target: 3,
    },
    {
      source: 4,
      target: 4,
    },
    {
      source: 5,
      target: 4,
    },
    {
      source: 6,
      target: 7,
    },
    {
      source: 6,
      target: 8,
    },
    {
      source: 9,
      target: 3,
    },
    {
      source: 10,
      target: 9,
    },
    {
      source: 11,
      target: 12,
    },
    {
      source: 11,
      target: 9,
    },
    {
      source: 11,
      target: 13,
    },
    {
      source: 11,
      target: 14,
    },
    {
      source: 15,
      target: 16,
    },
    {
      source: 15,
      target: 17,
    },
    {
      source: 15,
      target: 0,
    },
    {
      source: 15,
      target: 18,
    },
    {
      source: 15,
      target: 9,
    },
    {
      source: 15,
      target: 11,
    },
    {
      source: 15,
      target: 19,
    },
    {
      source: 15,
      target: 20,
    },
    {
      source: 15,
      target: 21,
    },
    {
      source: 15,
      target: 22,
    },
    {
      source: 15,
      target: 23,
    },
    {
      source: 15,
      target: 24,
    },
    {
      source: 15,
      target: 25,
    },
    {
      source: 15,
      target: 26,
    },
    {
      source: 15,
      target: 27,
    },
    {
      source: 15,
      target: 28,
    },
    {
      source: 15,
      target: 29,
    },
    {
      source: 15,
      target: 30,
    },
    {
      source: 15,
      target: 31,
    },
    {
      source: 15,
      target: 32,
    },
    {
      source: 15,
      target: 4,
    },
    {
      source: 16,
      target: 1,
    },
    {
      source: 13,
      target: 14,
    },
    {
      source: 1,
      target: 15,
    },
    {
      source: 1,
      target: 1,
    },
    {
      source: 1,
      target: 14,
    },
    {
      source: 14,
      target: 3,
    },
    {
      source: 12,
      target: 1,
    },
    {
      source: 18,
      target: 1,
    },
    {
      source: 18,
      target: 14,
    },
    {
      source: 18,
      target: 3,
    },
    {
      source: 33,
      target: 34,
    },
    {
      source: 35,
      target: 33,
    },
    {
      source: 35,
      target: 36,
    },
    {
      source: 35,
      target: 37,
    },
    {
      source: 35,
      target: 38,
    },
    {
      source: 35,
      target: 39,
    },
    {
      source: 35,
      target: 34,
    },
    {
      source: 35,
      target: 40,
    },
    {
      source: 35,
      target: 41,
    },
    {
      source: 42,
      target: 43,
    },
    {
      source: 19,
      target: 1,
    },
    {
      source: 20,
      target: 1,
    },
    {
      source: 44,
      target: 7,
    },
    {
      source: 45,
      target: 46,
    },
    {
      source: 47,
      target: 48,
    },
    {
      source: 47,
      target: 49,
    },
    {
      source: 47,
      target: 39,
    },
    {
      source: 50,
      target: 44,
    },
    {
      source: 51,
      target: 52,
    },
    {
      source: 21,
      target: 1,
    },
    {
      source: 21,
      target: 9,
    },
    {
      source: 53,
      target: 5,
    },
    {
      source: 54,
      target: 55,
    },
    {
      source: 56,
      target: 55,
    },
    {
      source: 56,
      target: 57,
    },
    {
      source: 58,
      target: 55,
    },
    {
      source: 58,
      target: 59,
    },
    {
      source: 58,
      target: 60,
    },
    {
      source: 61,
      target: 55,
    },
    {
      source: 61,
      target: 62,
    },
    {
      source: 61,
      target: 59,
    },
    {
      source: 63,
      target: 55,
    },
    {
      source: 63,
      target: 57,
    },
    {
      source: 64,
      target: 65,
    },
    {
      source: 64,
      target: 66,
    },
    {
      source: 64,
      target: 67,
    },
    {
      source: 64,
      target: 68,
    },
    {
      source: 55,
      target: 55,
    },
    {
      source: 55,
      target: 60,
    },
    {
      source: 62,
      target: 55,
    },
    {
      source: 57,
      target: 55,
    },
    {
      source: 57,
      target: 65,
    },
    {
      source: 69,
      target: 55,
    },
    {
      source: 69,
      target: 57,
    },
    {
      source: 60,
      target: 70,
    },
    {
      source: 60,
      target: 62,
    },
    {
      source: 60,
      target: 55,
    },
    {
      source: 71,
      target: 55,
    },
    {
      source: 72,
      target: 65,
    },
    {
      source: 73,
      target: 74,
    },
    {
      source: 75,
      target: 73,
    },
    {
      source: 75,
      target: 76,
    },
    {
      source: 76,
      target: 77,
    },
    {
      source: 78,
      target: 79,
    },
    {
      source: 78,
      target: 80,
    },
    {
      source: 49,
      target: 81,
    },
    {
      source: 49,
      target: 78,
    },
    {
      source: 82,
      target: 5,
    },
    {
      source: 83,
      target: 84,
    },
    {
      source: 22,
      target: 1,
    },
    {
      source: 22,
      target: 14,
    },
    {
      source: 85,
      target: 80,
    },
    {
      source: 85,
      target: 86,
    },
    {
      source: 85,
      target: 87,
    },
    {
      source: 88,
      target: 89,
    },
    {
      source: 88,
      target: 90,
    },
    {
      source: 88,
      target: 88,
    },
    {
      source: 88,
      target: 91,
    },
    {
      source: 86,
      target: 92,
    },
    {
      source: 90,
      target: 93,
    },
    {
      source: 94,
      target: 7,
    },
    {
      source: 94,
      target: 8,
    },
    {
      source: 94,
      target: 95,
    },
    {
      source: 96,
      target: 7,
    },
    {
      source: 96,
      target: 97,
    },
    {
      source: 98,
      target: 85,
    },
    {
      source: 99,
      target: 88,
    },
    {
      source: 100,
      target: 60,
    },
    {
      source: 100,
      target: 96,
    },
    {
      source: 100,
      target: 101,
    },
    {
      source: 102,
      target: 103,
    },
    {
      source: 104,
      target: 102,
    },
    {
      source: 103,
      target: 102,
    },
    {
      source: 105,
      target: 103,
    },
    {
      source: 106,
      target: 7,
    },
    {
      source: 106,
      target: 107,
    },
    {
      source: 108,
      target: 109,
    },
    {
      source: 23,
      target: 1,
    },
    {
      source: 23,
      target: 14,
    },
    {
      source: 8,
      target: 7,
    },
    {
      source: 8,
      target: 109,
    },
    {
      source: 8,
      target: 110,
    },
    {
      source: 8,
      target: 8,
    },
    {
      source: 8,
      target: 57,
    },
    {
      source: 8,
      target: 6,
    },
    {
      source: 8,
      target: 46,
    },
    {
      source: 8,
      target: 45,
    },
    {
      source: 8,
      target: 95,
    },
    {
      source: 8,
      target: 111,
    },
    {
      source: 112,
      target: 7,
    },
    {
      source: 113,
      target: 7,
    },
    {
      source: 92,
      target: 114,
    },
    {
      source: 80,
      target: 98,
    },
    {
      source: 80,
      target: 85,
    },
    {
      source: 80,
      target: 115,
    },
    {
      source: 80,
      target: 116,
    },
    {
      source: 80,
      target: 87,
    },
    {
      source: 114,
      target: 80,
    },
    {
      source: 93,
      target: 89,
    },
    {
      source: 116,
      target: 80,
    },
    {
      source: 89,
      target: 99,
    },
    {
      source: 89,
      target: 89,
    },
    {
      source: 89,
      target: 117,
    },
    {
      source: 89,
      target: 88,
    },
    {
      source: 118,
      target: 119,
    },
    {
      source: 120,
      target: 81,
    },
    {
      source: 121,
      target: 80,
    },
    {
      source: 121,
      target: 122,
    },
    {
      source: 121,
      target: 120,
    },
    {
      source: 91,
      target: 89,
    },
    {
      source: 91,
      target: 123,
    },
    {
      source: 91,
      target: 81,
    },
    {
      source: 48,
      target: 81,
    },
    {
      source: 124,
      target: 119,
    },
    {
      source: 125,
      target: 4,
    },
    {
      source: 126,
      target: 98,
    },
    {
      source: 127,
      target: 119,
    },
    {
      source: 122,
      target: 127,
    },
    {
      source: 3,
      target: 5,
    },
    {
      source: 3,
      target: 3,
    },
    {
      source: 128,
      target: 5,
    },
    {
      source: 128,
      target: 128,
    },
    {
      source: 24,
      target: 1,
    },
    {
      source: 24,
      target: 13,
    },
    {
      source: 129,
      target: 130,
    },
    {
      source: 131,
      target: 132,
    },
    {
      source: 133,
      target: 134,
    },
    {
      source: 135,
      target: 7,
    },
    {
      source: 135,
      target: 95,
    },
    {
      source: 136,
      target: 137,
    },
    {
      source: 138,
      target: 137,
    },
    {
      source: 139,
      target: 137,
    },
    {
      source: 140,
      target: 141,
    },
    {
      source: 142,
      target: 137,
    },
    {
      source: 143,
      target: 137,
    },
    {
      source: 144,
      target: 137,
    },
    {
      source: 145,
      target: 137,
    },
    {
      source: 146,
      target: 137,
    },
    {
      source: 146,
      target: 147,
    },
    {
      source: 146,
      target: 95,
    },
    {
      source: 146,
      target: 148,
    },
    {
      source: 34,
      target: 137,
    },
    {
      source: 149,
      target: 7,
    },
    {
      source: 150,
      target: 137,
    },
    {
      source: 150,
      target: 95,
    },
    {
      source: 151,
      target: 137,
    },
    {
      source: 151,
      target: 149,
    },
    {
      source: 152,
      target: 137,
    },
    {
      source: 153,
      target: 137,
    },
    {
      source: 154,
      target: 137,
    },
    {
      source: 155,
      target: 137,
    },
    {
      source: 101,
      target: 8,
    },
    {
      source: 101,
      target: 135,
    },
    {
      source: 101,
      target: 149,
    },
    {
      source: 137,
      target: 8,
    },
    {
      source: 137,
      target: 149,
    },
    {
      source: 156,
      target: 137,
    },
    {
      source: 156,
      target: 157,
    },
    {
      source: 158,
      target: 137,
    },
    {
      source: 158,
      target: 149,
    },
    {
      source: 158,
      target: 147,
    },
    {
      source: 158,
      target: 148,
    },
    {
      source: 159,
      target: 137,
    },
    {
      source: 160,
      target: 149,
    },
    {
      source: 160,
      target: 7,
    },
    {
      source: 147,
      target: 137,
    },
    {
      source: 147,
      target: 149,
    },
    {
      source: 161,
      target: 137,
    },
    {
      source: 161,
      target: 157,
    },
    {
      source: 162,
      target: 137,
    },
    {
      source: 163,
      target: 137,
    },
    {
      source: 164,
      target: 137,
    },
    {
      source: 165,
      target: 137,
    },
    {
      source: 166,
      target: 137,
    },
    {
      source: 167,
      target: 137,
    },
    {
      source: 167,
      target: 157,
    },
    {
      source: 39,
      target: 137,
    },
    {
      source: 168,
      target: 137,
    },
    {
      source: 168,
      target: 48,
    },
    {
      source: 168,
      target: 147,
    },
    {
      source: 168,
      target: 95,
    },
    {
      source: 168,
      target: 148,
    },
    {
      source: 168,
      target: 114,
    },
    {
      source: 169,
      target: 137,
    },
    {
      source: 169,
      target: 147,
    },
    {
      source: 169,
      target: 95,
    },
    {
      source: 169,
      target: 148,
    },
    {
      source: 170,
      target: 137,
    },
    {
      source: 170,
      target: 147,
    },
    {
      source: 171,
      target: 137,
    },
    {
      source: 171,
      target: 147,
    },
    {
      source: 172,
      target: 137,
    },
    {
      source: 173,
      target: 137,
    },
    {
      source: 173,
      target: 70,
    },
    {
      source: 173,
      target: 108,
    },
    {
      source: 174,
      target: 137,
    },
    {
      source: 174,
      target: 149,
    },
    {
      source: 175,
      target: 137,
    },
    {
      source: 141,
      target: 137,
    },
    {
      source: 141,
      target: 176,
    },
    {
      source: 141,
      target: 177,
    },
    {
      source: 141,
      target: 178,
    },
    {
      source: 141,
      target: 179,
    },
    {
      source: 141,
      target: 180,
    },
    {
      source: 181,
      target: 137,
    },
    {
      source: 182,
      target: 137,
    },
    {
      source: 183,
      target: 137,
    },
    {
      source: 183,
      target: 95,
    },
    {
      source: 184,
      target: 137,
    },
    {
      source: 185,
      target: 137,
    },
    {
      source: 185,
      target: 147,
    },
    {
      source: 185,
      target: 148,
    },
    {
      source: 185,
      target: 157,
    },
    {
      source: 186,
      target: 137,
    },
    {
      source: 187,
      target: 137,
    },
    {
      source: 188,
      target: 137,
    },
    {
      source: 188,
      target: 147,
    },
    {
      source: 189,
      target: 149,
    },
    {
      source: 189,
      target: 188,
    },
    {
      source: 189,
      target: 7,
    },
    {
      source: 190,
      target: 137,
    },
    {
      source: 190,
      target: 147,
    },
    {
      source: 190,
      target: 108,
    },
    {
      source: 190,
      target: 95,
    },
    {
      source: 190,
      target: 148,
    },
    {
      source: 191,
      target: 137,
    },
    {
      source: 192,
      target: 137,
    },
    {
      source: 193,
      target: 137,
    },
    {
      source: 194,
      target: 137,
    },
    {
      source: 194,
      target: 95,
    },
    {
      source: 195,
      target: 137,
    },
    {
      source: 196,
      target: 137,
    },
    {
      source: 197,
      target: 137,
    },
    {
      source: 197,
      target: 147,
    },
    {
      source: 197,
      target: 95,
    },
    {
      source: 197,
      target: 189,
    },
    {
      source: 197,
      target: 149,
    },
    {
      source: 197,
      target: 148,
    },
    {
      source: 197,
      target: 7,
    },
    {
      source: 198,
      target: 137,
    },
    {
      source: 199,
      target: 137,
    },
    {
      source: 200,
      target: 137,
    },
    {
      source: 201,
      target: 137,
    },
    {
      source: 201,
      target: 70,
    },
    {
      source: 202,
      target: 137,
    },
    {
      source: 203,
      target: 137,
    },
    {
      source: 204,
      target: 137,
    },
    {
      source: 205,
      target: 137,
    },
    {
      source: 205,
      target: 202,
    },
    {
      source: 205,
      target: 149,
    },
    {
      source: 205,
      target: 206,
    },
    {
      source: 207,
      target: 137,
    },
    {
      source: 207,
      target: 149,
    },
    {
      source: 206,
      target: 137,
    },
    {
      source: 206,
      target: 149,
    },
    {
      source: 208,
      target: 137,
    },
    {
      source: 208,
      target: 147,
    },
    {
      source: 208,
      target: 95,
    },
    {
      source: 208,
      target: 148,
    },
    {
      source: 209,
      target: 137,
    },
    {
      source: 210,
      target: 137,
    },
    {
      source: 210,
      target: 180,
    },
    {
      source: 211,
      target: 137,
    },
    {
      source: 212,
      target: 137,
    },
    {
      source: 40,
      target: 141,
    },
    {
      source: 213,
      target: 214,
    },
    {
      source: 213,
      target: 215,
    },
    {
      source: 213,
      target: 216,
    },
    {
      source: 217,
      target: 213,
    },
    {
      source: 218,
      target: 219,
    },
    {
      source: 218,
      target: 214,
    },
    {
      source: 218,
      target: 220,
    },
    {
      source: 218,
      target: 221,
    },
    {
      source: 222,
      target: 215,
    },
    {
      source: 222,
      target: 223,
    },
    {
      source: 222,
      target: 224,
    },
    {
      source: 222,
      target: 216,
    },
    {
      source: 225,
      target: 214,
    },
    {
      source: 225,
      target: 220,
    },
    {
      source: 225,
      target: 216,
    },
    {
      source: 226,
      target: 215,
    },
    {
      source: 226,
      target: 226,
    },
    {
      source: 220,
      target: 219,
    },
    {
      source: 220,
      target: 214,
    },
    {
      source: 220,
      target: 221,
    },
    {
      source: 220,
      target: 216,
    },
    {
      source: 220,
      target: 225,
    },
    {
      source: 224,
      target: 216,
    },
    {
      source: 216,
      target: 227,
    },
    {
      source: 216,
      target: 214,
    },
    {
      source: 216,
      target: 221,
    },
    {
      source: 221,
      target: 218,
    },
    {
      source: 221,
      target: 227,
    },
    {
      source: 221,
      target: 220,
    },
    {
      source: 223,
      target: 216,
    },
    {
      source: 228,
      target: 5,
    },
    {
      source: 228,
      target: 228,
    },
    {
      source: 229,
      target: 5,
    },
    {
      source: 229,
      target: 229,
    },
    {
      source: 230,
      target: 5,
    },
    {
      source: 230,
      target: 230,
    },
    {
      source: 231,
      target: 231,
    },
    {
      source: 232,
      target: 233,
    },
    {
      source: 234,
      target: 219,
    },
    {
      source: 177,
      target: 176,
    },
    {
      source: 25,
      target: 12,
    },
    {
      source: 25,
      target: 141,
    },
    {
      source: 235,
      target: 236,
    },
    {
      source: 236,
      target: 235,
    },
    {
      source: 237,
      target: 238,
    },
    {
      source: 237,
      target: 239,
    },
    {
      source: 233,
      target: 240,
    },
    {
      source: 26,
      target: 12,
    },
    {
      source: 26,
      target: 233,
    },
    {
      source: 27,
      target: 12,
    },
    {
      source: 27,
      target: 233,
    },
    {
      source: 241,
      target: 233,
    },
    {
      source: 240,
      target: 242,
    },
    {
      source: 243,
      target: 244,
    },
    {
      source: 115,
      target: 117,
    },
    {
      source: 245,
      target: 7,
    },
    {
      source: 246,
      target: 95,
    },
    {
      source: 246,
      target: 7,
    },
    {
      source: 97,
      target: 7,
    },
    {
      source: 247,
      target: 131,
    },
    {
      source: 247,
      target: 104,
    },
    {
      source: 247,
      target: 105,
    },
    {
      source: 247,
      target: 248,
    },
    {
      source: 247,
      target: 129,
    },
    {
      source: 249,
      target: 250,
    },
    {
      source: 251,
      target: 232,
    },
    {
      source: 7,
      target: 97,
    },
    {
      source: 7,
      target: 95,
    },
    {
      source: 7,
      target: 7,
    },
    {
      source: 7,
      target: 8,
    },
    {
      source: 252,
      target: 7,
    },
    {
      source: 253,
      target: 252,
    },
    {
      source: 253,
      target: 7,
    },
    {
      source: 95,
      target: 7,
    },
    {
      source: 254,
      target: 7,
    },
    {
      source: 255,
      target: 256,
    },
    {
      source: 257,
      target: 255,
    },
    {
      source: 257,
      target: 87,
    },
    {
      source: 258,
      target: 259,
    },
    {
      source: 28,
      target: 12,
    },
    {
      source: 28,
      target: 14,
    },
    {
      source: 28,
      target: 32,
    },
    {
      source: 29,
      target: 1,
    },
    {
      source: 260,
      target: 52,
    },
    {
      source: 260,
      target: 261,
    },
    {
      source: 260,
      target: 262,
    },
    {
      source: 132,
      target: 133,
    },
    {
      source: 263,
      target: 264,
    },
    {
      source: 265,
      target: 7,
    },
    {
      source: 265,
      target: 70,
    },
    {
      source: 266,
      target: 95,
    },
    {
      source: 107,
      target: 7,
    },
    {
      source: 107,
      target: 94,
    },
    {
      source: 107,
      target: 107,
    },
    {
      source: 107,
      target: 46,
    },
    {
      source: 107,
      target: 45,
    },
    {
      source: 68,
      target: 64,
    },
    {
      source: 67,
      target: 64,
    },
    {
      source: 267,
      target: 4,
    },
    {
      source: 267,
      target: 5,
    },
    {
      source: 268,
      target: 269,
    },
    {
      source: 268,
      target: 241,
    },
    {
      source: 268,
      target: 270,
    },
    {
      source: 268,
      target: 233,
    },
    {
      source: 268,
      target: 271,
    },
    {
      source: 268,
      target: 267,
    },
    {
      source: 268,
      target: 272,
    },
    {
      source: 271,
      target: 269,
    },
    {
      source: 272,
      target: 273,
    },
    {
      source: 274,
      target: 275,
    },
    {
      source: 30,
      target: 1,
    },
    {
      source: 276,
      target: 277,
    },
    {
      source: 111,
      target: 94,
    },
    {
      source: 111,
      target: 8,
    },
    {
      source: 111,
      target: 7,
    },
    {
      source: 111,
      target: 95,
    },
    {
      source: 111,
      target: 106,
    },
    {
      source: 278,
      target: 279,
    },
    {
      source: 278,
      target: 244,
    },
    {
      source: 280,
      target: 84,
    },
    {
      source: 239,
      target: 176,
    },
    {
      source: 239,
      target: 2,
    },
    {
      source: 238,
      target: 239,
    },
    {
      source: 281,
      target: 282,
    },
    {
      source: 283,
      target: 284,
    },
    {
      source: 285,
      target: 281,
    },
    {
      source: 286,
      target: 287,
    },
    {
      source: 288,
      target: 286,
    },
    {
      source: 289,
      target: 290,
    },
    {
      source: 291,
      target: 292,
    },
    {
      source: 293,
      target: 292,
    },
    {
      source: 74,
      target: 292,
    },
    {
      source: 294,
      target: 295,
    },
    {
      source: 296,
      target: 289,
    },
    {
      source: 77,
      target: 296,
    },
    {
      source: 297,
      target: 298,
    },
    {
      source: 297,
      target: 299,
    },
    {
      source: 300,
      target: 301,
    },
    {
      source: 70,
      target: 59,
    },
    {
      source: 70,
      target: 7,
    },
    {
      source: 70,
      target: 70,
    },
    {
      source: 302,
      target: 70,
    },
    {
      source: 303,
      target: 304,
    },
    {
      source: 303,
      target: 305,
    },
    {
      source: 306,
      target: 307,
    },
    {
      source: 308,
      target: 309,
    },
    {
      source: 310,
      target: 307,
    },
    {
      source: 311,
      target: 312,
    },
    {
      source: 313,
      target: 314,
    },
    {
      source: 315,
      target: 316,
    },
    {
      source: 317,
      target: 318,
    },
    {
      source: 319,
      target: 320,
    },
    {
      source: 321,
      target: 322,
    },
    {
      source: 323,
      target: 324,
    },
    {
      source: 325,
      target: 326,
    },
    {
      source: 327,
      target: 312,
    },
    {
      source: 328,
      target: 312,
    },
    {
      source: 329,
      target: 312,
    },
    {
      source: 312,
      target: 330,
    },
    {
      source: 312,
      target: 307,
    },
    {
      source: 331,
      target: 304,
    },
    {
      source: 331,
      target: 315,
    },
    {
      source: 332,
      target: 304,
    },
    {
      source: 332,
      target: 333,
    },
    {
      source: 334,
      target: 65,
    },
    {
      source: 334,
      target: 67,
    },
    {
      source: 335,
      target: 307,
    },
    {
      source: 335,
      target: 336,
    },
    {
      source: 335,
      target: 319,
    },
    {
      source: 335,
      target: 333,
    },
    {
      source: 337,
      target: 338,
    },
    {
      source: 337,
      target: 315,
    },
    {
      source: 339,
      target: 304,
    },
    {
      source: 340,
      target: 341,
    },
    {
      source: 157,
      target: 342,
    },
    {
      source: 307,
      target: 8,
    },
    {
      source: 307,
      target: 342,
    },
    {
      source: 307,
      target: 307,
    },
    {
      source: 343,
      target: 344,
    },
    {
      source: 343,
      target: 345,
    },
    {
      source: 343,
      target: 307,
    },
    {
      source: 343,
      target: 346,
    },
    {
      source: 343,
      target: 343,
    },
    {
      source: 345,
      target: 343,
    },
    {
      source: 347,
      target: 304,
    },
    {
      source: 347,
      target: 315,
    },
    {
      source: 338,
      target: 348,
    },
    {
      source: 349,
      target: 350,
    },
    {
      source: 349,
      target: 305,
    },
    {
      source: 349,
      target: 333,
    },
    {
      source: 351,
      target: 350,
    },
    {
      source: 351,
      target: 305,
    },
    {
      source: 351,
      target: 333,
    },
    {
      source: 351,
      target: 319,
    },
    {
      source: 352,
      target: 350,
    },
    {
      source: 352,
      target: 305,
    },
    {
      source: 353,
      target: 350,
    },
    {
      source: 353,
      target: 305,
    },
    {
      source: 353,
      target: 336,
    },
    {
      source: 353,
      target: 333,
    },
    {
      source: 354,
      target: 350,
    },
    {
      source: 354,
      target: 336,
    },
    {
      source: 354,
      target: 333,
    },
    {
      source: 354,
      target: 305,
    },
    {
      source: 354,
      target: 319,
    },
    {
      source: 354,
      target: 355,
    },
    {
      source: 354,
      target: 348,
    },
    {
      source: 356,
      target: 350,
    },
    {
      source: 356,
      target: 336,
    },
    {
      source: 356,
      target: 305,
    },
    {
      source: 357,
      target: 350,
    },
    {
      source: 357,
      target: 305,
    },
    {
      source: 357,
      target: 336,
    },
    {
      source: 357,
      target: 333,
    },
    {
      source: 358,
      target: 307,
    },
    {
      source: 358,
      target: 336,
    },
    {
      source: 359,
      target: 350,
    },
    {
      source: 359,
      target: 336,
    },
    {
      source: 359,
      target: 305,
    },
    {
      source: 360,
      target: 350,
    },
    {
      source: 361,
      target: 335,
    },
    {
      source: 362,
      target: 335,
    },
    {
      source: 363,
      target: 335,
    },
    {
      source: 364,
      target: 335,
    },
    {
      source: 365,
      target: 350,
    },
    {
      source: 365,
      target: 305,
    },
    {
      source: 365,
      target: 336,
    },
    {
      source: 366,
      target: 350,
    },
    {
      source: 366,
      target: 321,
    },
    {
      source: 367,
      target: 350,
    },
    {
      source: 368,
      target: 307,
    },
    {
      source: 368,
      target: 305,
    },
    {
      source: 369,
      target: 350,
    },
    {
      source: 369,
      target: 305,
    },
    {
      source: 369,
      target: 333,
    },
    {
      source: 369,
      target: 336,
    },
    {
      source: 370,
      target: 350,
    },
    {
      source: 370,
      target: 336,
    },
    {
      source: 370,
      target: 305,
    },
    {
      source: 371,
      target: 307,
    },
    {
      source: 371,
      target: 336,
    },
    {
      source: 372,
      target: 350,
    },
    {
      source: 372,
      target: 305,
    },
    {
      source: 372,
      target: 336,
    },
    {
      source: 373,
      target: 307,
    },
    {
      source: 373,
      target: 336,
    },
    {
      source: 374,
      target: 350,
    },
    {
      source: 374,
      target: 305,
    },
    {
      source: 375,
      target: 350,
    },
    {
      source: 375,
      target: 336,
    },
    {
      source: 375,
      target: 355,
    },
    {
      source: 375,
      target: 333,
    },
    {
      source: 376,
      target: 341,
    },
    {
      source: 376,
      target: 355,
    },
    {
      source: 376,
      target: 333,
    },
    {
      source: 376,
      target: 315,
    },
    {
      source: 350,
      target: 341,
    },
    {
      source: 350,
      target: 315,
    },
    {
      source: 350,
      target: 305,
    },
    {
      source: 377,
      target: 321,
    },
    {
      source: 377,
      target: 323,
    },
    {
      source: 378,
      target: 307,
    },
    {
      source: 379,
      target: 307,
    },
    {
      source: 380,
      target: 307,
    },
    {
      source: 381,
      target: 307,
    },
    {
      source: 382,
      target: 307,
    },
    {
      source: 383,
      target: 307,
    },
    {
      source: 384,
      target: 304,
    },
    {
      source: 384,
      target: 315,
    },
    {
      source: 385,
      target: 304,
    },
    {
      source: 386,
      target: 307,
    },
    {
      source: 387,
      target: 341,
    },
    {
      source: 388,
      target: 341,
    },
    {
      source: 388,
      target: 325,
    },
    {
      source: 388,
      target: 333,
    },
    {
      source: 389,
      target: 307,
    },
    {
      source: 390,
      target: 304,
    },
    {
      source: 390,
      target: 315,
    },
    {
      source: 390,
      target: 321,
    },
    {
      source: 318,
      target: 316,
    },
    {
      source: 391,
      target: 388,
    },
    {
      source: 391,
      target: 315,
    },
    {
      source: 392,
      target: 304,
    },
    {
      source: 392,
      target: 315,
    },
    {
      source: 393,
      target: 307,
    },
    {
      source: 393,
      target: 324,
    },
    {
      source: 393,
      target: 394,
    },
    {
      source: 395,
      target: 377,
    },
    {
      source: 395,
      target: 315,
    },
    {
      source: 395,
      target: 333,
    },
    {
      source: 395,
      target: 313,
    },
    {
      source: 395,
      target: 314,
    },
    {
      source: 396,
      target: 341,
    },
    {
      source: 396,
      target: 315,
    },
    {
      source: 396,
      target: 333,
    },
    {
      source: 394,
      target: 394,
    },
    {
      source: 397,
      target: 307,
    },
    {
      source: 398,
      target: 307,
    },
    {
      source: 399,
      target: 338,
    },
    {
      source: 320,
      target: 400,
    },
    {
      source: 401,
      target: 334,
    },
    {
      source: 402,
      target: 304,
    },
    {
      source: 402,
      target: 403,
    },
    {
      source: 402,
      target: 336,
    },
    {
      source: 402,
      target: 404,
    },
    {
      source: 402,
      target: 405,
    },
    {
      source: 402,
      target: 406,
    },
    {
      source: 402,
      target: 407,
    },
    {
      source: 402,
      target: 408,
    },
    {
      source: 402,
      target: 409,
    },
    {
      source: 402,
      target: 410,
    },
    {
      source: 402,
      target: 411,
    },
    {
      source: 402,
      target: 412,
    },
    {
      source: 402,
      target: 413,
    },
    {
      source: 402,
      target: 414,
    },
    {
      source: 402,
      target: 415,
    },
    {
      source: 402,
      target: 416,
    },
    {
      source: 402,
      target: 417,
    },
    {
      source: 402,
      target: 418,
    },
    {
      source: 402,
      target: 419,
    },
    {
      source: 402,
      target: 420,
    },
    {
      source: 402,
      target: 421,
    },
    {
      source: 402,
      target: 422,
    },
    {
      source: 402,
      target: 423,
    },
    {
      source: 404,
      target: 424,
    },
    {
      source: 405,
      target: 424,
    },
    {
      source: 406,
      target: 424,
    },
    {
      source: 407,
      target: 424,
    },
    {
      source: 408,
      target: 424,
    },
    {
      source: 409,
      target: 424,
    },
    {
      source: 410,
      target: 424,
    },
    {
      source: 411,
      target: 424,
    },
    {
      source: 412,
      target: 424,
    },
    {
      source: 413,
      target: 424,
    },
    {
      source: 414,
      target: 424,
    },
    {
      source: 415,
      target: 424,
    },
    {
      source: 416,
      target: 424,
    },
    {
      source: 417,
      target: 424,
    },
    {
      source: 418,
      target: 424,
    },
    {
      source: 419,
      target: 424,
    },
    {
      source: 420,
      target: 424,
    },
    {
      source: 403,
      target: 424,
    },
    {
      source: 421,
      target: 424,
    },
    {
      source: 422,
      target: 424,
    },
    {
      source: 425,
      target: 377,
    },
    {
      source: 425,
      target: 315,
    },
    {
      source: 425,
      target: 333,
    },
    {
      source: 425,
      target: 325,
    },
    {
      source: 423,
      target: 423,
    },
    {
      source: 426,
      target: 423,
    },
    {
      source: 427,
      target: 304,
    },
    {
      source: 427,
      target: 426,
    },
    {
      source: 428,
      target: 304,
    },
    {
      source: 428,
      target: 426,
    },
    {
      source: 429,
      target: 388,
    },
    {
      source: 429,
      target: 315,
    },
    {
      source: 430,
      target: 304,
    },
    {
      source: 430,
      target: 315,
    },
    {
      source: 431,
      target: 338,
    },
    {
      source: 432,
      target: 312,
    },
    {
      source: 433,
      target: 341,
    },
    {
      source: 433,
      target: 336,
    },
    {
      source: 341,
      target: 305,
    },
    {
      source: 341,
      target: 57,
    },
    {
      source: 341,
      target: 65,
    },
    {
      source: 434,
      target: 435,
    },
    {
      source: 342,
      target: 436,
    },
    {
      source: 342,
      target: 423,
    },
    {
      source: 342,
      target: 437,
    },
    {
      source: 342,
      target: 315,
    },
    {
      source: 342,
      target: 324,
    },
    {
      source: 342,
      target: 307,
    },
    {
      source: 342,
      target: 314,
    },
    {
      source: 342,
      target: 316,
    },
    {
      source: 342,
      target: 394,
    },
    {
      source: 342,
      target: 400,
    },
    {
      source: 342,
      target: 438,
    },
    {
      source: 342,
      target: 8,
    },
    {
      source: 342,
      target: 95,
    },
    {
      source: 439,
      target: 304,
    },
    {
      source: 440,
      target: 377,
    },
    {
      source: 441,
      target: 442,
    },
    {
      source: 443,
      target: 341,
    },
    {
      source: 443,
      target: 333,
    },
    {
      source: 443,
      target: 315,
    },
    {
      source: 443,
      target: 423,
    },
    {
      source: 443,
      target: 324,
    },
    {
      source: 444,
      target: 304,
    },
    {
      source: 445,
      target: 309,
    },
    {
      source: 445,
      target: 333,
    },
    {
      source: 445,
      target: 315,
    },
    {
      source: 446,
      target: 443,
    },
    {
      source: 446,
      target: 317,
    },
    {
      source: 446,
      target: 319,
    },
    {
      source: 447,
      target: 341,
    },
    {
      source: 438,
      target: 394,
    },
    {
      source: 304,
      target: 393,
    },
    {
      source: 304,
      target: 325,
    },
    {
      source: 326,
      target: 438,
    },
    {
      source: 448,
      target: 309,
    },
    {
      source: 449,
      target: 446,
    },
    {
      source: 309,
      target: 305,
    },
    {
      source: 346,
      target: 304,
    },
    {
      source: 346,
      target: 343,
    },
    {
      source: 346,
      target: 315,
    },
    {
      source: 450,
      target: 436,
    },
    {
      source: 450,
      target: 442,
    },
    {
      source: 437,
      target: 321,
    },
    {
      source: 437,
      target: 326,
    },
    {
      source: 437,
      target: 323,
    },
    {
      source: 437,
      target: 307,
    },
    {
      source: 451,
      target: 307,
    },
    {
      source: 43,
      target: 44,
    },
    {
      source: 43,
      target: 43,
    },
    {
      source: 180,
      target: 452,
    },
    {
      source: 180,
      target: 453,
    },
    {
      source: 453,
      target: 180,
    },
    {
      source: 453,
      target: 94,
    },
    {
      source: 452,
      target: 453,
    },
    {
      source: 179,
      target: 180,
    },
    {
      source: 454,
      target: 344,
    },
    {
      source: 455,
      target: 454,
    },
    {
      source: 456,
      target: 7,
    },
    {
      source: 456,
      target: 252,
    },
    {
      source: 457,
      target: 5,
    },
    {
      source: 457,
      target: 457,
    },
    {
      source: 458,
      target: 5,
    },
    {
      source: 458,
      target: 458,
    },
    {
      source: 2,
      target: 5,
    },
    {
      source: 2,
      target: 2,
    },
    {
      source: 459,
      target: 2,
    },
    {
      source: 459,
      target: 459,
    },
    {
      source: 31,
      target: 1,
    },
    {
      source: 31,
      target: 3,
    },
    {
      source: 460,
      target: 33,
    },
    {
      source: 460,
      target: 461,
    },
    {
      source: 460,
      target: 462,
    },
    {
      source: 460,
      target: 463,
    },
    {
      source: 460,
      target: 464,
    },
    {
      source: 460,
      target: 465,
    },
    {
      source: 460,
      target: 4,
    },
    {
      source: 460,
      target: 5,
    },
    {
      source: 460,
      target: 466,
    },
    {
      source: 460,
      target: 467,
    },
    {
      source: 460,
      target: 468,
    },
    {
      source: 460,
      target: 469,
    },
    {
      source: 460,
      target: 470,
    },
    {
      source: 460,
      target: 36,
    },
    {
      source: 460,
      target: 39,
    },
    {
      source: 460,
      target: 34,
    },
    {
      source: 460,
      target: 40,
    },
    {
      source: 460,
      target: 3,
    },
    {
      source: 471,
      target: 472,
    },
    {
      source: 473,
      target: 72,
    },
    {
      source: 474,
      target: 55,
    },
    {
      source: 474,
      target: 57,
    },
    {
      source: 475,
      target: 55,
    },
    {
      source: 475,
      target: 62,
    },
    {
      source: 475,
      target: 474,
    },
    {
      source: 476,
      target: 476,
    },
    {
      source: 477,
      target: 72,
    },
    {
      source: 478,
      target: 72,
    },
    {
      source: 479,
      target: 95,
    },
    {
      source: 480,
      target: 4,
    },
    {
      source: 480,
      target: 5,
    },
    {
      source: 481,
      target: 279,
    },
    {
      source: 84,
      target: 222,
    },
    {
      source: 84,
      target: 482,
    },
    {
      source: 84,
      target: 483,
    },
    {
      source: 84,
      target: 84,
    },
    {
      source: 84,
      target: 257,
    },
    {
      source: 84,
      target: 73,
    },
    {
      source: 84,
      target: 76,
    },
    {
      source: 84,
      target: 126,
    },
    {
      source: 84,
      target: 99,
    },
    {
      source: 84,
      target: 89,
    },
    {
      source: 484,
      target: 485,
    },
    {
      source: 484,
      target: 4,
    },
    {
      source: 484,
      target: 5,
    },
    {
      source: 484,
      target: 486,
    },
    {
      source: 487,
      target: 488,
    },
    {
      source: 487,
      target: 489,
    },
    {
      source: 487,
      target: 490,
    },
    {
      source: 488,
      target: 490,
    },
    {
      source: 490,
      target: 7,
    },
    {
      source: 491,
      target: 7,
    },
    {
      source: 491,
      target: 94,
    },
  ],
  categories: [
    {
      name: "HTMLElement",
      keyword: {},
      base: "HTMLElement",
    },
    {
      name: "WebGL",
      keyword: {},
      base: "WebGLRenderingContext",
    },
    {
      name: "SVG",
      keyword: {},
      base: "SVGElement",
    },
    {
      name: "CSS",
      keyword: {},
      base: "CSSRule",
    },
    {
      name: "Other",
      keyword: {},
      base: "Other",
    },
  ],
  nodes: [
    {
      name: "",
      value: 1,
      category: 4,
      id: 0,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 1,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 2,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 3,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 4,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 5,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 6,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 7,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 8,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 9,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 10,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 11,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 12,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 13,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 14,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 15,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 16,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 17,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 18,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 19,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 20,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 21,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 22,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 23,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 24,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 25,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 26,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 27,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 28,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 29,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 30,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 31,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 32,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 33,
    },
    {
      name: "",
      value: 1,
      category: 0,
      id: 34,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 35,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 36,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 37,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 38,
    },
    {
      name: "",
      value: 1,
      category: 0,
      id: 39,
    },
    {
      name: "",
      value: 1,
      category: 0,
      id: 40,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 41,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 42,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 43,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 44,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 45,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 46,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 47,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 48,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 49,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 50,
    },
    {
      name: "Console",
      value: 1,
      category: 4,
      id: 51,
    },
    {
      name: "MemoryInfo",
      value: 1,
      category: 4,
      id: 52,
    },
    {
      name: "Crypto",
      value: 1,
      category: 4,
      id: 53,
    },
    {
      name: "CSSCharsetRule",
      value: 1,
      category: 3,
      id: 54,
    },
    {
      name: "CSSRule",
      value: 3,
      category: 3,
      id: 55,
    },
    {
      name: "CSSFontFaceRule",
      value: 1,
      category: 3,
      id: 56,
    },
    {
      name: "CSSStyleDeclaration",
      value: 1,
      category: 3,
      id: 57,
    },
    {
      name: "CSSImportRule",
      value: 1,
      category: 3,
      id: 58,
    },
    {
      name: "MediaList",
      value: 1,
      category: 4,
      id: 59,
    },
    {
      name: "CSSStyleSheet",
      value: 1,
      category: 3,
      id: 60,
    },
    {
      name: "CSSMediaRule",
      value: 1,
      category: 3,
      id: 61,
    },
    {
      name: "CSSRuleList",
      value: 1,
      category: 3,
      id: 62,
    },
    {
      name: "CSSPageRule",
      value: 1,
      category: 3,
      id: 63,
    },
    {
      name: "CSSPrimitiveValue",
      value: 1,
      category: 3,
      id: 64,
    },
    {
      name: "CSSValue",
      value: 1,
      category: 3,
      id: 65,
    },
    {
      name: "Counter",
      value: 1,
      category: 4,
      id: 66,
    },
    {
      name: "RGBColor",
      value: 1,
      category: 4,
      id: 67,
    },
    {
      name: "Rect",
      value: 1,
      category: 4,
      id: 68,
    },
    {
      name: "CSSStyleRule",
      value: 1,
      category: 3,
      id: 69,
    },
    {
      name: "StyleSheet",
      value: 1,
      category: 4,
      id: 70,
    },
    {
      name: "CSSUnknownRule",
      value: 1,
      category: 3,
      id: 71,
    },
    {
      name: "CSSValueList",
      value: 1,
      category: 3,
      id: 72,
    },
    {
      name: "Database",
      value: 1,
      category: 4,
      id: 73,
    },
    {
      name: "SQLTransactionCallback",
      value: 1,
      category: 4,
      id: 74,
    },
    {
      name: "DatabaseCallback",
      value: 1,
      category: 4,
      id: 75,
    },
    {
      name: "DatabaseSync",
      value: 1,
      category: 4,
      id: 76,
    },
    {
      name: "SQLTransactionSyncCallback",
      value: 1,
      category: 4,
      id: 77,
    },
    {
      name: "DataTransferItem",
      value: 1,
      category: 4,
      id: 78,
    },
    {
      name: "StringCallback",
      value: 1,
      category: 4,
      id: 79,
    },
    {
      name: "Entry",
      value: 1,
      category: 4,
      id: 80,
    },
    {
      name: "File",
      value: 1,
      category: 4,
      id: 81,
    },
    {
      name: "DataView",
      value: 1,
      category: 4,
      id: 82,
    },
    {
      name: "DedicatedWorkerContext",
      value: 1,
      category: 4,
      id: 83,
    },
    {
      name: "WorkerContext",
      value: 1,
      category: 4,
      id: 84,
    },
    {
      name: "DirectoryEntry",
      value: 1,
      category: 4,
      id: 85,
    },
    {
      name: "DirectoryReader",
      value: 1,
      category: 4,
      id: 86,
    },
    {
      name: "VoidCallback",
      value: 1,
      category: 4,
      id: 87,
    },
    {
      name: "DirectoryEntrySync",
      value: 1,
      category: 4,
      id: 88,
    },
    {
      name: "EntrySync",
      value: 1,
      category: 4,
      id: 89,
    },
    {
      name: "DirectoryReaderSync",
      value: 1,
      category: 4,
      id: 90,
    },
    {
      name: "FileEntrySync",
      value: 1,
      category: 4,
      id: 91,
    },
    {
      name: "EntriesCallback",
      value: 1,
      category: 4,
      id: 92,
    },
    {
      name: "EntryArraySync",
      value: 1,
      category: 4,
      id: 93,
    },
    {
      name: "DocumentFragment",
      value: 1,
      category: 4,
      id: 94,
    },
    {
      name: "NodeList",
      value: 1,
      category: 4,
      id: 95,
    },
    {
      name: "DocumentType",
      value: 1,
      category: 4,
      id: 96,
    },
    {
      name: "NamedNodeMap",
      value: 1,
      category: 4,
      id: 97,
    },
    {
      name: "DOMFileSystem",
      value: 1,
      category: 4,
      id: 98,
    },
    {
      name: "DOMFileSystemSync",
      value: 1,
      category: 4,
      id: 99,
    },
    {
      name: "DOMImplementation",
      value: 1,
      category: 4,
      id: 100,
    },
    {
      name: "HTMLDocument",
      value: 1,
      category: 0,
      id: 101,
    },
    {
      name: "DOMMimeType",
      value: 1,
      category: 4,
      id: 102,
    },
    {
      name: "DOMPlugin",
      value: 1,
      category: 4,
      id: 103,
    },
    {
      name: "DOMMimeTypeArray",
      value: 1,
      category: 4,
      id: 104,
    },
    {
      name: "DOMPluginArray",
      value: 1,
      category: 4,
      id: 105,
    },
    {
      name: "DOMSelection",
      value: 1,
      category: 4,
      id: 106,
    },
    {
      name: "Range",
      value: 1,
      category: 4,
      id: 107,
    },
    {
      name: "DOMSettableTokenList",
      value: 1,
      category: 4,
      id: 108,
    },
    {
      name: "DOMTokenList",
      value: 1,
      category: 4,
      id: 109,
    },
    {
      name: "DOMStringMap",
      value: 1,
      category: 4,
      id: 110,
    },
    {
      name: "ShadowRoot",
      value: 1,
      category: 4,
      id: 111,
    },
    {
      name: "Entity",
      value: 1,
      category: 4,
      id: 112,
    },
    {
      name: "EntityReference",
      value: 1,
      category: 4,
      id: 113,
    },
    {
      name: "EntryArray",
      value: 1,
      category: 4,
      id: 114,
    },
    {
      name: "MetadataCallback",
      value: 1,
      category: 4,
      id: 115,
    },
    {
      name: "EntryCallback",
      value: 1,
      category: 4,
      id: 116,
    },
    {
      name: "Metadata",
      value: 1,
      category: 4,
      id: 117,
    },
    {
      name: "ErrorCallback",
      value: 1,
      category: 4,
      id: 118,
    },
    {
      name: "FileError",
      value: 1,
      category: 4,
      id: 119,
    },
    {
      name: "FileCallback",
      value: 1,
      category: 4,
      id: 120,
    },
    {
      name: "FileEntry",
      value: 1,
      category: 4,
      id: 121,
    },
    {
      name: "FileWriterCallback",
      value: 1,
      category: 4,
      id: 122,
    },
    {
      name: "FileWriterSync",
      value: 1,
      category: 4,
      id: 123,
    },
    {
      name: "FileReader",
      value: 1,
      category: 4,
      id: 124,
    },
    {
      name: "FileReaderSync",
      value: 1,
      category: 4,
      id: 125,
    },
    {
      name: "FileSystemCallback",
      value: 1,
      category: 4,
      id: 126,
    },
    {
      name: "FileWriter",
      value: 1,
      category: 4,
      id: 127,
    },
    {
      name: "Float64Array",
      value: 1,
      category: 4,
      id: 128,
    },
    {
      name: "GamepadList",
      value: 1,
      category: 4,
      id: 129,
    },
    {
      name: "Gamepad",
      value: 1,
      category: 4,
      id: 130,
    },
    {
      name: "Geolocation",
      value: 1,
      category: 4,
      id: 131,
    },
    {
      name: "PositionCallback",
      value: 1,
      category: 4,
      id: 132,
    },
    {
      name: "Geoposition",
      value: 1,
      category: 4,
      id: 133,
    },
    {
      name: "Coordinates",
      value: 1,
      category: 4,
      id: 134,
    },
    {
      name: "HTMLAllCollection",
      value: 1,
      category: 0,
      id: 135,
    },
    {
      name: "HTMLAnchorElement",
      value: 1,
      category: 0,
      id: 136,
    },
    {
      name: "HTMLElement",
      value: 3,
      category: 0,
      id: 137,
    },
    {
      name: "HTMLAppletElement",
      value: 1,
      category: 0,
      id: 138,
    },
    {
      name: "HTMLAreaElement",
      value: 1,
      category: 0,
      id: 139,
    },
    {
      name: "HTMLAudioElement",
      value: 1,
      category: 0,
      id: 140,
    },
    {
      name: "HTMLMediaElement",
      value: 1,
      category: 0,
      id: 141,
    },
    {
      name: "HTMLBaseElement",
      value: 1,
      category: 0,
      id: 142,
    },
    {
      name: "HTMLBaseFontElement",
      value: 1,
      category: 0,
      id: 143,
    },
    {
      name: "HTMLBodyElement",
      value: 1,
      category: 0,
      id: 144,
    },
    {
      name: "HTMLBRElement",
      value: 1,
      category: 0,
      id: 145,
    },
    {
      name: "HTMLButtonElement",
      value: 1,
      category: 0,
      id: 146,
    },
    {
      name: "HTMLFormElement",
      value: 1,
      category: 0,
      id: 147,
    },
    {
      name: "ValidityState",
      value: 1,
      category: 4,
      id: 148,
    },
    {
      name: "HTMLCollection",
      value: 1,
      category: 0,
      id: 149,
    },
    {
      name: "HTMLContentElement",
      value: 1,
      category: 0,
      id: 150,
    },
    {
      name: "HTMLDataListElement",
      value: 1,
      category: 0,
      id: 151,
    },
    {
      name: "HTMLDetailsElement",
      value: 1,
      category: 0,
      id: 152,
    },
    {
      name: "HTMLDirectoryElement",
      value: 1,
      category: 0,
      id: 153,
    },
    {
      name: "HTMLDivElement",
      value: 1,
      category: 0,
      id: 154,
    },
    {
      name: "HTMLDListElement",
      value: 1,
      category: 0,
      id: 155,
    },
    {
      name: "HTMLEmbedElement",
      value: 1,
      category: 0,
      id: 156,
    },
    {
      name: "SVGDocument",
      value: 1,
      category: 2,
      id: 157,
    },
    {
      name: "HTMLFieldSetElement",
      value: 1,
      category: 0,
      id: 158,
    },
    {
      name: "HTMLFontElement",
      value: 1,
      category: 0,
      id: 159,
    },
    {
      name: "HTMLFormControlsCollection",
      value: 1,
      category: 0,
      id: 160,
    },
    {
      name: "HTMLFrameElement",
      value: 1,
      category: 0,
      id: 161,
    },
    {
      name: "HTMLFrameSetElement",
      value: 1,
      category: 0,
      id: 162,
    },
    {
      name: "HTMLHeadElement",
      value: 1,
      category: 0,
      id: 163,
    },
    {
      name: "HTMLHeadingElement",
      value: 1,
      category: 0,
      id: 164,
    },
    {
      name: "HTMLHRElement",
      value: 1,
      category: 0,
      id: 165,
    },
    {
      name: "HTMLHtmlElement",
      value: 1,
      category: 0,
      id: 166,
    },
    {
      name: "HTMLIFrameElement",
      value: 1,
      category: 0,
      id: 167,
    },
    {
      name: "HTMLInputElement",
      value: 1,
      category: 0,
      id: 168,
    },
    {
      name: "HTMLKeygenElement",
      value: 1,
      category: 0,
      id: 169,
    },
    {
      name: "HTMLLabelElement",
      value: 1,
      category: 0,
      id: 170,
    },
    {
      name: "HTMLLegendElement",
      value: 1,
      category: 0,
      id: 171,
    },
    {
      name: "HTMLLIElement",
      value: 1,
      category: 0,
      id: 172,
    },
    {
      name: "HTMLLinkElement",
      value: 1,
      category: 0,
      id: 173,
    },
    {
      name: "HTMLMapElement",
      value: 1,
      category: 0,
      id: 174,
    },
    {
      name: "HTMLMarqueeElement",
      value: 1,
      category: 0,
      id: 175,
    },
    {
      name: "TimeRanges",
      value: 1,
      category: 4,
      id: 176,
    },
    {
      name: "MediaController",
      value: 1,
      category: 4,
      id: 177,
    },
    {
      name: "MediaError",
      value: 1,
      category: 4,
      id: 178,
    },
    {
      name: "TextTrackList",
      value: 1,
      category: 4,
      id: 179,
    },
    {
      name: "TextTrack",
      value: 1,
      category: 4,
      id: 180,
    },
    {
      name: "HTMLMenuElement",
      value: 1,
      category: 0,
      id: 181,
    },
    {
      name: "HTMLMetaElement",
      value: 1,
      category: 0,
      id: 182,
    },
    {
      name: "HTMLMeterElement",
      value: 1,
      category: 0,
      id: 183,
    },
    {
      name: "HTMLModElement",
      value: 1,
      category: 0,
      id: 184,
    },
    {
      name: "HTMLObjectElement",
      value: 1,
      category: 0,
      id: 185,
    },
    {
      name: "HTMLOListElement",
      value: 1,
      category: 0,
      id: 186,
    },
    {
      name: "HTMLOptGroupElement",
      value: 1,
      category: 0,
      id: 187,
    },
    {
      name: "HTMLOptionElement",
      value: 1,
      category: 0,
      id: 188,
    },
    {
      name: "HTMLOptionsCollection",
      value: 1,
      category: 0,
      id: 189,
    },
    {
      name: "HTMLOutputElement",
      value: 1,
      category: 0,
      id: 190,
    },
    {
      name: "HTMLParagraphElement",
      value: 1,
      category: 0,
      id: 191,
    },
    {
      name: "HTMLParamElement",
      value: 1,
      category: 0,
      id: 192,
    },
    {
      name: "HTMLPreElement",
      value: 1,
      category: 0,
      id: 193,
    },
    {
      name: "HTMLProgressElement",
      value: 1,
      category: 0,
      id: 194,
    },
    {
      name: "HTMLQuoteElement",
      value: 1,
      category: 0,
      id: 195,
    },
    {
      name: "HTMLScriptElement",
      value: 1,
      category: 0,
      id: 196,
    },
    {
      name: "HTMLSelectElement",
      value: 1,
      category: 0,
      id: 197,
    },
    {
      name: "HTMLShadowElement",
      value: 1,
      category: 0,
      id: 198,
    },
    {
      name: "HTMLSourceElement",
      value: 1,
      category: 0,
      id: 199,
    },
    {
      name: "HTMLSpanElement",
      value: 1,
      category: 0,
      id: 200,
    },
    {
      name: "HTMLStyleElement",
      value: 1,
      category: 0,
      id: 201,
    },
    {
      name: "HTMLTableCaptionElement",
      value: 1,
      category: 0,
      id: 202,
    },
    {
      name: "HTMLTableCellElement",
      value: 1,
      category: 0,
      id: 203,
    },
    {
      name: "HTMLTableColElement",
      value: 1,
      category: 0,
      id: 204,
    },
    {
      name: "HTMLTableElement",
      value: 1,
      category: 0,
      id: 205,
    },
    {
      name: "HTMLTableSectionElement",
      value: 1,
      category: 0,
      id: 206,
    },
    {
      name: "HTMLTableRowElement",
      value: 1,
      category: 0,
      id: 207,
    },
    {
      name: "HTMLTextAreaElement",
      value: 1,
      category: 0,
      id: 208,
    },
    {
      name: "HTMLTitleElement",
      value: 1,
      category: 0,
      id: 209,
    },
    {
      name: "HTMLTrackElement",
      value: 1,
      category: 0,
      id: 210,
    },
    {
      name: "HTMLUListElement",
      value: 1,
      category: 0,
      id: 211,
    },
    {
      name: "HTMLUnknownElement",
      value: 1,
      category: 0,
      id: 212,
    },
    {
      name: "IDBCursor",
      value: 1,
      category: 4,
      id: 213,
    },
    {
      name: "IDBAny",
      value: 1,
      category: 4,
      id: 214,
    },
    {
      name: "IDBKey",
      value: 1,
      category: 4,
      id: 215,
    },
    {
      name: "IDBRequest",
      value: 1,
      category: 4,
      id: 216,
    },
    {
      name: "IDBCursorWithValue",
      value: 1,
      category: 4,
      id: 217,
    },
    {
      name: "IDBDatabase",
      value: 1,
      category: 4,
      id: 218,
    },
    {
      name: "DOMStringList",
      value: 1,
      category: 4,
      id: 219,
    },
    {
      name: "IDBObjectStore",
      value: 1,
      category: 4,
      id: 220,
    },
    {
      name: "IDBTransaction",
      value: 1,
      category: 4,
      id: 221,
    },
    {
      name: "IDBFactory",
      value: 1,
      category: 4,
      id: 222,
    },
    {
      name: "IDBVersionChangeRequest",
      value: 1,
      category: 4,
      id: 223,
    },
    {
      name: "IDBOpenDBRequest",
      value: 1,
      category: 4,
      id: 224,
    },
    {
      name: "IDBIndex",
      value: 1,
      category: 4,
      id: 225,
    },
    {
      name: "IDBKeyRange",
      value: 1,
      category: 4,
      id: 226,
    },
    {
      name: "DOMError",
      value: 1,
      category: 4,
      id: 227,
    },
    {
      name: "Int16Array",
      value: 1,
      category: 4,
      id: 228,
    },
    {
      name: "Int32Array",
      value: 1,
      category: 4,
      id: 229,
    },
    {
      name: "Int8Array",
      value: 1,
      category: 4,
      id: 230,
    },
    {
      name: "JavaScriptCallFrame",
      value: 1,
      category: 4,
      id: 231,
    },
    {
      name: "LocalMediaStream",
      value: 1,
      category: 4,
      id: 232,
    },
    {
      name: "MediaStream",
      value: 1,
      category: 4,
      id: 233,
    },
    {
      name: "Location",
      value: 1,
      category: 4,
      id: 234,
    },
    {
      name: "MediaQueryList",
      value: 1,
      category: 4,
      id: 235,
    },
    {
      name: "MediaQueryListListener",
      value: 1,
      category: 4,
      id: 236,
    },
    {
      name: "MediaSource",
      value: 1,
      category: 4,
      id: 237,
    },
    {
      name: "SourceBufferList",
      value: 1,
      category: 4,
      id: 238,
    },
    {
      name: "SourceBuffer",
      value: 1,
      category: 4,
      id: 239,
    },
    {
      name: "MediaStreamTrackList",
      value: 1,
      category: 4,
      id: 240,
    },
    {
      name: "MediaStreamList",
      value: 1,
      category: 4,
      id: 241,
    },
    {
      name: "MediaStreamTrack",
      value: 1,
      category: 4,
      id: 242,
    },
    {
      name: "MessageChannel",
      value: 1,
      category: 4,
      id: 243,
    },
    {
      name: "MessagePort",
      value: 1,
      category: 4,
      id: 244,
    },
    {
      name: "MutationObserver",
      value: 1,
      category: 4,
      id: 245,
    },
    {
      name: "MutationRecord",
      value: 1,
      category: 4,
      id: 246,
    },
    {
      name: "Navigator",
      value: 1,
      category: 4,
      id: 247,
    },
    {
      name: "BatteryManager",
      value: 1,
      category: 4,
      id: 248,
    },
    {
      name: "NavigatorUserMediaErrorCallback",
      value: 1,
      category: 4,
      id: 249,
    },
    {
      name: "NavigatorUserMediaError",
      value: 1,
      category: 4,
      id: 250,
    },
    {
      name: "NavigatorUserMediaSuccessCallback",
      value: 1,
      category: 4,
      id: 251,
    },
    {
      name: "NodeFilter",
      value: 1,
      category: 4,
      id: 252,
    },
    {
      name: "NodeIterator",
      value: 1,
      category: 4,
      id: 253,
    },
    {
      name: "Notation",
      value: 1,
      category: 4,
      id: 254,
    },
    {
      name: "Notification",
      value: 1,
      category: 4,
      id: 255,
    },
    {
      name: "NotificationPermissionCallback",
      value: 1,
      category: 4,
      id: 256,
    },
    {
      name: "NotificationCenter",
      value: 1,
      category: 4,
      id: 257,
    },
    {
      name: "OESVertexArrayObject",
      value: 1,
      category: 4,
      id: 258,
    },
    {
      name: "WebGLVertexArrayObjectOES",
      value: 1,
      category: 1,
      id: 259,
    },
    {
      name: "Performance",
      value: 1,
      category: 4,
      id: 260,
    },
    {
      name: "PerformanceNavigation",
      value: 1,
      category: 4,
      id: 261,
    },
    {
      name: "PerformanceTiming",
      value: 1,
      category: 4,
      id: 262,
    },
    {
      name: "PositionErrorCallback",
      value: 1,
      category: 4,
      id: 263,
    },
    {
      name: "PositionError",
      value: 1,
      category: 4,
      id: 264,
    },
    {
      name: "ProcessingInstruction",
      value: 1,
      category: 4,
      id: 265,
    },
    {
      name: "RadioNodeList",
      value: 1,
      category: 4,
      id: 266,
    },
    {
      name: "RTCDataChannel",
      value: 1,
      category: 4,
      id: 267,
    },
    {
      name: "RTCPeerConnection",
      value: 1,
      category: 4,
      id: 268,
    },
    {
      name: "RTCSessionDescription",
      value: 1,
      category: 4,
      id: 269,
    },
    {
      name: "RTCIceCandidate",
      value: 1,
      category: 4,
      id: 270,
    },
    {
      name: "RTCSessionDescriptionCallback",
      value: 1,
      category: 4,
      id: 271,
    },
    {
      name: "RTCStatsCallback",
      value: 1,
      category: 4,
      id: 272,
    },
    {
      name: "RTCStatsResponse",
      value: 1,
      category: 4,
      id: 273,
    },
    {
      name: "RTCStatsReport",
      value: 1,
      category: 4,
      id: 274,
    },
    {
      name: "RTCStatsElement",
      value: 1,
      category: 4,
      id: 275,
    },
    {
      name: "ScriptProfile",
      value: 1,
      category: 4,
      id: 276,
    },
    {
      name: "ScriptProfileNode",
      value: 1,
      category: 4,
      id: 277,
    },
    {
      name: "SharedWorker",
      value: 1,
      category: 4,
      id: 278,
    },
    {
      name: "AbstractWorker",
      value: 1,
      category: 4,
      id: 279,
    },
    {
      name: "SharedWorkerContext",
      value: 1,
      category: 4,
      id: 280,
    },
    {
      name: "SpeechGrammarList",
      value: 1,
      category: 4,
      id: 281,
    },
    {
      name: "SpeechGrammar",
      value: 1,
      category: 4,
      id: 282,
    },
    {
      name: "SpeechInputResultList",
      value: 1,
      category: 4,
      id: 283,
    },
    {
      name: "SpeechInputResult",
      value: 1,
      category: 4,
      id: 284,
    },
    {
      name: "SpeechRecognition",
      value: 1,
      category: 4,
      id: 285,
    },
    {
      name: "SpeechRecognitionResult",
      value: 1,
      category: 4,
      id: 286,
    },
    {
      name: "SpeechRecognitionAlternative",
      value: 1,
      category: 4,
      id: 287,
    },
    {
      name: "SpeechRecognitionResultList",
      value: 1,
      category: 4,
      id: 288,
    },
    {
      name: "SQLResultSet",
      value: 1,
      category: 4,
      id: 289,
    },
    {
      name: "SQLResultSetRowList",
      value: 1,
      category: 4,
      id: 290,
    },
    {
      name: "SQLStatementCallback",
      value: 1,
      category: 4,
      id: 291,
    },
    {
      name: "SQLTransaction",
      value: 1,
      category: 4,
      id: 292,
    },
    {
      name: "SQLStatementErrorCallback",
      value: 1,
      category: 4,
      id: 293,
    },
    {
      name: "SQLTransactionErrorCallback",
      value: 1,
      category: 4,
      id: 294,
    },
    {
      name: "SQLError",
      value: 1,
      category: 4,
      id: 295,
    },
    {
      name: "SQLTransactionSync",
      value: 1,
      category: 4,
      id: 296,
    },
    {
      name: "StorageInfo",
      value: 1,
      category: 4,
      id: 297,
    },
    {
      name: "StorageInfoUsageCallback",
      value: 1,
      category: 4,
      id: 298,
    },
    {
      name: "StorageInfoQuotaCallback",
      value: 1,
      category: 4,
      id: 299,
    },
    {
      name: "StorageInfoErrorCallback",
      value: 1,
      category: 4,
      id: 300,
    },
    {
      name: "DOMCoreException",
      value: 1,
      category: 4,
      id: 301,
    },
    {
      name: "StyleSheetList",
      value: 1,
      category: 4,
      id: 302,
    },
    {
      name: "SVGAElement",
      value: 1,
      category: 2,
      id: 303,
    },
    {
      name: "SVGTransformable",
      value: 1,
      category: 2,
      id: 304,
    },
    {
      name: "SVGAnimatedString",
      value: 1,
      category: 2,
      id: 305,
    },
    {
      name: "SVGAltGlyphDefElement",
      value: 1,
      category: 2,
      id: 306,
    },
    {
      name: "SVGElement",
      value: 3,
      category: 2,
      id: 307,
    },
    {
      name: "SVGAltGlyphElement",
      value: 1,
      category: 2,
      id: 308,
    },
    {
      name: "SVGURIReference",
      value: 1,
      category: 2,
      id: 309,
    },
    {
      name: "SVGAltGlyphItemElement",
      value: 1,
      category: 2,
      id: 310,
    },
    {
      name: "SVGAnimateColorElement",
      value: 1,
      category: 2,
      id: 311,
    },
    {
      name: "SVGAnimationElement",
      value: 1,
      category: 2,
      id: 312,
    },
    {
      name: "SVGAnimatedAngle",
      value: 1,
      category: 2,
      id: 313,
    },
    {
      name: "SVGAngle",
      value: 1,
      category: 2,
      id: 314,
    },
    {
      name: "SVGAnimatedLength",
      value: 1,
      category: 2,
      id: 315,
    },
    {
      name: "SVGLength",
      value: 1,
      category: 2,
      id: 316,
    },
    {
      name: "SVGAnimatedLengthList",
      value: 1,
      category: 2,
      id: 317,
    },
    {
      name: "SVGLengthList",
      value: 1,
      category: 2,
      id: 318,
    },
    {
      name: "SVGAnimatedNumberList",
      value: 1,
      category: 2,
      id: 319,
    },
    {
      name: "SVGNumberList",
      value: 1,
      category: 2,
      id: 320,
    },
    {
      name: "SVGAnimatedPreserveAspectRatio",
      value: 1,
      category: 2,
      id: 321,
    },
    {
      name: "SVGPreserveAspectRatio",
      value: 1,
      category: 2,
      id: 322,
    },
    {
      name: "SVGAnimatedRect",
      value: 1,
      category: 2,
      id: 323,
    },
    {
      name: "SVGRect",
      value: 1,
      category: 2,
      id: 324,
    },
    {
      name: "SVGAnimatedTransformList",
      value: 1,
      category: 2,
      id: 325,
    },
    {
      name: "SVGTransformList",
      value: 1,
      category: 2,
      id: 326,
    },
    {
      name: "SVGAnimateElement",
      value: 1,
      category: 2,
      id: 327,
    },
    {
      name: "SVGAnimateMotionElement",
      value: 1,
      category: 2,
      id: 328,
    },
    {
      name: "SVGAnimateTransformElement",
      value: 1,
      category: 2,
      id: 329,
    },
    {
      name: "ElementTimeControl",
      value: 1,
      category: 4,
      id: 330,
    },
    {
      name: "SVGCircleElement",
      value: 1,
      category: 2,
      id: 331,
    },
    {
      name: "SVGClipPathElement",
      value: 1,
      category: 2,
      id: 332,
    },
    {
      name: "SVGAnimatedEnumeration",
      value: 1,
      category: 2,
      id: 333,
    },
    {
      name: "SVGColor",
      value: 1,
      category: 2,
      id: 334,
    },
    {
      name: "SVGComponentTransferFunctionElement",
      value: 1,
      category: 2,
      id: 335,
    },
    {
      name: "SVGAnimatedNumber",
      value: 1,
      category: 2,
      id: 336,
    },
    {
      name: "SVGCursorElement",
      value: 1,
      category: 2,
      id: 337,
    },
    {
      name: "SVGExternalResourcesRequired",
      value: 1,
      category: 2,
      id: 338,
    },
    {
      name: "SVGDefsElement",
      value: 1,
      category: 2,
      id: 339,
    },
    {
      name: "SVGDescElement",
      value: 1,
      category: 2,
      id: 340,
    },
    {
      name: "SVGStylable",
      value: 1,
      category: 2,
      id: 341,
    },
    {
      name: "SVGSVGElement",
      value: 1,
      category: 2,
      id: 342,
    },
    {
      name: "SVGElementInstance",
      value: 1,
      category: 2,
      id: 343,
    },
    {
      name: "EventTarget",
      value: 1,
      category: 4,
      id: 344,
    },
    {
      name: "SVGElementInstanceList",
      value: 1,
      category: 2,
      id: 345,
    },
    {
      name: "SVGUseElement",
      value: 1,
      category: 2,
      id: 346,
    },
    {
      name: "SVGEllipseElement",
      value: 1,
      category: 2,
      id: 347,
    },
    {
      name: "SVGAnimatedBoolean",
      value: 1,
      category: 2,
      id: 348,
    },
    {
      name: "SVGFEBlendElement",
      value: 1,
      category: 2,
      id: 349,
    },
    {
      name: "SVGFilterPrimitiveStandardAttributes",
      value: 1,
      category: 2,
      id: 350,
    },
    {
      name: "SVGFEColorMatrixElement",
      value: 1,
      category: 2,
      id: 351,
    },
    {
      name: "SVGFEComponentTransferElement",
      value: 1,
      category: 2,
      id: 352,
    },
    {
      name: "SVGFECompositeElement",
      value: 1,
      category: 2,
      id: 353,
    },
    {
      name: "SVGFEConvolveMatrixElement",
      value: 1,
      category: 2,
      id: 354,
    },
    {
      name: "SVGAnimatedInteger",
      value: 1,
      category: 2,
      id: 355,
    },
    {
      name: "SVGFEDiffuseLightingElement",
      value: 1,
      category: 2,
      id: 356,
    },
    {
      name: "SVGFEDisplacementMapElement",
      value: 1,
      category: 2,
      id: 357,
    },
    {
      name: "SVGFEDistantLightElement",
      value: 1,
      category: 2,
      id: 358,
    },
    {
      name: "SVGFEDropShadowElement",
      value: 1,
      category: 2,
      id: 359,
    },
    {
      name: "SVGFEFloodElement",
      value: 1,
      category: 2,
      id: 360,
    },
    {
      name: "SVGFEFuncAElement",
      value: 1,
      category: 2,
      id: 361,
    },
    {
      name: "SVGFEFuncBElement",
      value: 1,
      category: 2,
      id: 362,
    },
    {
      name: "SVGFEFuncGElement",
      value: 1,
      category: 2,
      id: 363,
    },
    {
      name: "SVGFEFuncRElement",
      value: 1,
      category: 2,
      id: 364,
    },
    {
      name: "SVGFEGaussianBlurElement",
      value: 1,
      category: 2,
      id: 365,
    },
    {
      name: "SVGFEImageElement",
      value: 1,
      category: 2,
      id: 366,
    },
    {
      name: "SVGFEMergeElement",
      value: 1,
      category: 2,
      id: 367,
    },
    {
      name: "SVGFEMergeNodeElement",
      value: 1,
      category: 2,
      id: 368,
    },
    {
      name: "SVGFEMorphologyElement",
      value: 1,
      category: 2,
      id: 369,
    },
    {
      name: "SVGFEOffsetElement",
      value: 1,
      category: 2,
      id: 370,
    },
    {
      name: "SVGFEPointLightElement",
      value: 1,
      category: 2,
      id: 371,
    },
    {
      name: "SVGFESpecularLightingElement",
      value: 1,
      category: 2,
      id: 372,
    },
    {
      name: "SVGFESpotLightElement",
      value: 1,
      category: 2,
      id: 373,
    },
    {
      name: "SVGFETileElement",
      value: 1,
      category: 2,
      id: 374,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 375,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 376,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 377,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 378,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 379,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 380,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 381,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 382,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 383,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 384,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 385,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 386,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 387,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 388,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 389,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 390,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 391,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 392,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 393,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 394,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 395,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 396,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 397,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 398,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 399,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 400,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 401,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 402,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 403,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 404,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 405,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 406,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 407,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 408,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 409,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 410,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 411,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 412,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 413,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 414,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 415,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 416,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 417,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 418,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 419,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 420,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 421,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 422,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 423,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 424,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 425,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 426,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 427,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 428,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 429,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 430,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 431,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 432,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 433,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 434,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 435,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 436,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 437,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 438,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 439,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 440,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 441,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 442,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 443,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 444,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 445,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 446,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 447,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 448,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 449,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 450,
    },
    {
      name: "",
      value: 1,
      category: 2,
      id: 451,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 452,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 453,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 454,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 455,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 456,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 457,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 458,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 459,
    },
    {
      name: "",
      value: 3,
      category: 1,
      id: 460,
    },
    {
      name: "",
      value: 1,
      category: 1,
      id: 461,
    },
    {
      name: "",
      value: 1,
      category: 1,
      id: 462,
    },
    {
      name: "",
      value: 1,
      category: 1,
      id: 463,
    },
    {
      name: "",
      value: 1,
      category: 1,
      id: 464,
    },
    {
      name: "",
      value: 1,
      category: 1,
      id: 465,
    },
    {
      name: "",
      value: 1,
      category: 1,
      id: 466,
    },
    {
      name: "",
      value: 1,
      category: 1,
      id: 467,
    },
    {
      name: "",
      value: 1,
      category: 1,
      id: 468,
    },
    {
      name: "",
      value: 1,
      category: 1,
      id: 469,
    },
    {
      name: "",
      value: 1,
      category: 1,
      id: 470,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 471,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 472,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 473,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 474,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 475,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 476,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 477,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 478,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 479,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 480,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 481,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 482,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 483,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 484,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 485,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 486,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 487,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 488,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 489,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 490,
    },
    {
      name: "",
      value: 1,
      category: 4,
      id: 491,
    },
  ],
};

const RandomEcharts = () => {
  return (
    <Stack width={"100%"} height={"1200px"}>
      <ReactEcharts
        style={{ height: "600px" }}
        option={{
          tooltip: { show: false },

          /*  legend: {
            data: ["HTMLElement", "WebGL", "SVG", "CSS", "Other"],
          }, */
          series: [
            {
              type: "graph",
              layout: "force",
              animation: false,
              /*  label: {
                position: "right",
                formatter: "{b}",
              }, */
              draggable: true,
              data: webkitDep.nodes.map(function (node, idx) {
                node.id = idx;
                return node;
              }),

              categories: webkitDep.categories,
              force: {
                edgeLength: 5,
                repulsion: 20,
                gravity: 0.2,
              },
              edges: webkitDep.links,
            },
          ],
        }}
      />
    </Stack>
  );
};

export default RandomEcharts;
